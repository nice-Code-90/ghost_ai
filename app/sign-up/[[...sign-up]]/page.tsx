import { Suspense } from "react";
import { SignUp } from "@clerk/nextjs";

import { AuthShell } from "@/components/auth/auth-shell";
import { clerkAppearance } from "@/lib/clerk-appearance";

export const instant = false;

export default function SignUpPage() {
  return (
    <AuthShell>
      <Suspense
        fallback={<p className="text-sm text-copy-muted">Loading sign-up…</p>}
      >
        <SignUp appearance={clerkAppearance} />
      </Suspense>
    </AuthShell>
  );
}
