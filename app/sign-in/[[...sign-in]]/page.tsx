import { Suspense } from "react";
import { SignIn } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkAppearance } from "@/lib/clerk-appearance";

export const instant = false;

export default function SignInPage() {
  return (
    <AuthShell>
      <Suspense
        fallback={<p className="text-sm text-copy-muted">Loading sign-in…</p>}
      >
        <SignIn appearance={clerkAppearance} />
      </Suspense>
    </AuthShell>
  );
}
