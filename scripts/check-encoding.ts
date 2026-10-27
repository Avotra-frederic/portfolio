import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const sourceRoot = path.resolve("src");
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".html", ".json", ".svg"]);
const replacementCharacter = "\uFFFD";
const letterQuestionLetter = /[A-Za-z\u00C0-\u00FF]\?[A-Za-z\u00C0-\u00FF]/;
const wordQuestionWord = /[A-Za-z\u00C0-\u00FF]\s+\?\s+[A-Za-z\u00C0-\u00FF]/;
const urlPattern = /(?:https?:\/\/|mailto:)[^\s"'<>]+/g;
const errors: string[] = [];

function inspect(value: string, file: string, line: number): void {
  const candidate = value.replace(urlPattern, "");
  const beginsWithQuestion = /^(?:vous|tu|comment|pourquoi|quel(?:le)?s?|qui|que|quand|où|est-ce)\b/i.test(candidate.trim());
  if (candidate.includes(replacementCharacter)) {
    errors.push(`${file}:${line}: caractère de remplacement Unicode « \uFFFD »`);
  }
  if (letterQuestionLetter.test(candidate) || (wordQuestionWord.test(candidate) && !beginsWithQuestion)) {
    errors.push(`${file}:${line}: point d’interrogation suspect dans le texte`);
  }
}

function collectFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(fullPath);
    return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

function checkTypeScriptFile(file: string): void {
  const text = fs.readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const inspectNode = (node: ts.Node): void => {
    const isString = ts.isStringLiteralLike(node);
    const isJsxText = ts.isJsxText(node);
    const isTemplateChunk = node.kind >= ts.SyntaxKind.NoSubstitutionTemplateLiteral
      && node.kind <= ts.SyntaxKind.TemplateTail;
    if (isString || isJsxText || isTemplateChunk) {
      const position = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
      inspect(node.text, path.relative(process.cwd(), file), position.line + 1);
    }
    node.forEachChild(inspectNode);
  };
  inspectNode(sourceFile);
}

function checkTextFile(file: string): void {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => inspect(line, path.relative(process.cwd(), file), index + 1));
}

for (const file of [...collectFiles(sourceRoot), path.resolve("index.html")]) {
  if ([".ts", ".tsx", ".js", ".jsx"].includes(path.extname(file))) checkTypeScriptFile(file);
  else checkTextFile(file);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Encodage vérifié : aucun caractère suspect dans src/ et index.html.");
}
