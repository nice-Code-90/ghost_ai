"use client";

import { Plus } from "lucide-react";

import { useProjectDialogs } from "@/components/editor/use-project-dialogs";
import { Button } from "@/components/ui/button";

export function EditorHome() {
  const { openCreate } = useProjectDialogs();

  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center gap-3 text-center">
        <h1 className="text-xl font-medium text-copy-primary">
          Create a project or open an existing one
        </h1>
        <p className="text-sm text-copy-muted">
          Start a new architecture workspace, or choose a project from the
          sidebar.
        </p>
        <Button onClick={openCreate} className="mt-2">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </div>
  );
}
