import { clerkMiddleware } from "@clerk/nextjs/server";

const signInUrl =
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in";
const signUpUrl =
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up";

function isPublicPath(pathname: string): boolean {
  return (
    pathname === signInUrl ||
    pathname.startsWith(`${signInUrl}/`) ||
    pathname === signUpUrl ||
    pathname.startsWith(`${signUpUrl}/`)
  );
}

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicPath(req.nextUrl.pathname)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
