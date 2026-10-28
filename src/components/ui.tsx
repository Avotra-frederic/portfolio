import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps, type To } from "react-router-dom";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "aside";
  children: ReactNode;
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

interface ButtonLinkProps extends Omit<LinkProps, "to" | "className"> {
  children: ReactNode;
  path: To;
  className?: string;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Container({ children, className = "", ...props }: ContainerProps) {
  return <div className={`page-width ${className}`.trim()} {...props}>{children}</div>;
}

export function Section({ children, className = "", ...props }: SectionProps) {
  return <section className={className} {...props}>{children}</section>;
}

export function Card({ as: Component = "section", children, className = "", ...props }: CardProps) {
  return <Component className={`ui-card ${className}`.trim()} {...props}>{children}</Component>;
}

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return <span className={`ui-badge ${className}`.trim()} {...props}>{children}</span>;
}

export function Button({ className = "", ...props }: ButtonProps) {
  return <button className={`button ${className}`.trim()} {...props} />;
}

export function ButtonLink({ children, className = "", path, ...props }: ButtonLinkProps) {
  return <Link to={path} className={`ui-button ${className}`.trim()} {...props}>{children}</Link>;
}
