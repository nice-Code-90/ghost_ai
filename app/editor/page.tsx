import { auth } from "@clerk/nextjs/server";

import { EditorLayout } from "@/components/editor/editor-layout";

export const instant = false;

export default async function EditorPage() {
  await auth.protect();

  return (
    <EditorLayout>
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-copy-muted">Canvas placeholder</p>
      </div>
    </EditorLayout>
  );
}
