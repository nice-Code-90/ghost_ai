import { dark } from "@clerk/ui/themes";

export const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "var(--accent-primary)",
    colorBackground: "var(--bg-surface)",
    colorInputBackground: "var(--bg-subtle)",
    colorInputText: "var(--text-primary)",
    colorText: "var(--text-primary)",
    colorTextSecondary: "var(--text-secondary)",
    colorMutedText: "var(--text-muted)",
    colorBorder: "var(--border-default)",
    colorInputBorder: "var(--border-subtle)",
    colorRing: "var(--accent-primary)",
    borderRadius: "var(--radius)",
    fontFamily: "var(--font-geist-sans)",
  },
} as const;
