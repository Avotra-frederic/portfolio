import type { AnchorHTMLAttributes, ElementType, HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

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

export function ButtonLink({ children, className = "", ...props }: ButtonLinkProps) {
  return <a className={`ui-button ${className}`.trim()} {...props}>{children}</a>;
}
