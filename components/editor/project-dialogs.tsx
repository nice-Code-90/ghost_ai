"use client";

import { useProjectDialogs } from "@/components/editor/use-project-dialogs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function ProjectDialogs() {
  const {
    activeDialog,
    selectedProject,
    name,
    setName,
    slugPreview,
    isSubmitting,
    close,
    submit,
  } = useProjectDialogs();

  return (
    <>
      <Dialog
        open={activeDialog === "create"}
        onOpenChange={(open) => {
          if (!open) close();
        }}
      >
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <DialogTitle>Create project</DialogTitle>
            <DialogDescription>
              Start a new architecture workspace.
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex flex-col gap-3"
          >
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Project name"
              aria-label="Project name"
              autoFocus
            />
            <p className="text-sm text-copy-muted" aria-live="polite">
              Slug: {slugPreview || "—"}
            </p>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting || !slugPreview}>
                {isSubmitting ? "Creating…" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={activeDialog === "rename"}
        onOpenChange={(open) => {
          if (!open) close();
        }}
      >
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <DialogTitle>Rename project</DialogTitle>
            <DialogDescription>
              {selectedProject
                ? `Current name: ${selectedProject.name}`
                : "Rename this project."}
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex flex-col gap-3"
          >
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Project name"
              aria-label="Project name"
              autoFocus
            />
            <DialogFooter>
              <Button type="button" variant="outline" onClick={close}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || name.trim().length === 0}
              >
                {isSubmitting ? "Saving…" : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={activeDialog === "delete"}
        onOpenChange={(open) => {
          if (!open) close();
        }}
      >
        <DialogContent className="rounded-3xl">
          <DialogHeader>
            <DialogTitle>Delete project</DialogTitle>
            <DialogDescription>
              {selectedProject
                ? `This will permanently delete “${selectedProject.name}”. This action cannot be undone.`
                : "This action cannot be undone."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              disabled={isSubmitting}
              onClick={submit}
            >
              {isSubmitting ? "Deleting…" : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
