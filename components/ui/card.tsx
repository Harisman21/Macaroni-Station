import * as React from "react";
import { cn } from "@/lib/utils"; // pakai relative

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm hover:shadow-md transition ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
