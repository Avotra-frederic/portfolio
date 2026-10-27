export function CategoryApiCover() {
  return <div className="project-art category-api-art" aria-hidden="true">
    <div className="api-terminal">
      <div className="terminal-dots"><i/><i/><i/><span>API request</span></div>
      <div className="terminal-request"><b>GET</b><code>/api/v1/categories</code></div>
      <div className="terminal-response"><b>200 OK</b><span>application/json</span></div>
      <pre>{'[\n  { "name": "Santé",\n    "children": [\n      { "name": "Pharmacie" }\n    ]\n  }\n]'}</pre>
    </div>
    <div className="category-tree"><span>categories</span><i/><span>Maison</span><i/><span>Mode</span><i/><span>Santé</span><b>3</b></div>
  </div>;
}
