import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export const instant = false;

export default async function Home() {
  const { isAuthenticated } = await auth();

  if (isAuthenticated) {
    redirect("/editor");
  }

  redirect("/sign-in");
}
