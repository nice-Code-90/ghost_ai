import type { ReactNode } from "react";
import { FileText, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen bg-base font-sans lg:grid-cols-2">
      <div className="hidden flex-col justify-between border-r border-surface-border bg-surface px-12 py-8 lg:flex">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-brand" aria-hidden="true" />
          <p className="text-base font-semibold text-copy-primary">Ghost AI</p>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-semibold text-copy-primary">
              Design systems at the speed of thought.
            </h1>
            <p className="mt-3 text-sm text-copy-muted">
              Describe your architecture in plain English. Ghost AI maps it to
              a shared canvas your whole team can refine in real time.
            </p>
          </div>
          <ul className="flex flex-col gap-5">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <span className="rounded-xl bg-accent-dim p-2 text-brand">
                  <feature.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-copy-primary">
                    {feature.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-copy-muted">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-copy-faint">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </div>
      <div className="flex items-center justify-center px-4 py-10">
        {children}
      </div>
    </div>
  );
}
