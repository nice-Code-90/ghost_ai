import { EditorLayout } from "@/components/editor/editor-layout";

/**
 * Renders the editor route with a canvas placeholder inside the editor layout.
 */
export default function EditorPage() {
  return (
    <EditorLayout>
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-copy-muted">Canvas placeholder</p>
      </div>
    </EditorLayout>
  );
}
