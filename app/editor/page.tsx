import { auth } from "@clerk/nextjs/server";

import { EditorHome } from "@/components/editor/editor-home";
import { EditorLayout } from "@/components/editor/editor-layout";

export const instant = false;

export default async function EditorPage() {
  await auth.protect();

  return (
    <EditorLayout>
      <EditorHome />
    </EditorLayout>
  );
}
