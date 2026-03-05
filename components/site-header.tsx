"use client";

import { CalendarDays, GraduationCap } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <p className="font-mono text-sm font-semibold tracking-tight text-foreground">
              ПЦК Апталығы
            </p>
            <p className="text-xs text-muted-foreground">2026</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-secondary-foreground">
            10 — 17 наурыз
          </span>
        </div>
      </div>
    </header>
  );
}
