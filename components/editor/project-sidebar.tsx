"use client";

import { Pencil, Plus, Trash2, X } from "lucide-react";

import { useProjectDialogs } from "@/components/editor/use-project-dialogs";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  MOCK_OWNED_PROJECTS,
  MOCK_SHARED_PROJECTS,
  type MockProject,
} from "@/lib/mock-projects";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function ProjectRow({ project }: { project: MockProject }) {
  const { openRename, openDelete } = useProjectDialogs();

  return (
    <div className="flex items-center justify-between gap-2 rounded-xl px-2 py-1.5">
      <span className="truncate text-sm text-copy-primary">
        {project.name}
      </span>
      {project.owned && (
        <span className="flex shrink-0 items-center">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => openRename(project)}
            aria-label={`Rename ${project.name}`}
          >
            <Pencil className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => openDelete(project)}
            aria-label={`Delete ${project.name}`}
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </span>
      )}
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  const { openCreate } = useProjectDialogs();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        aria-hidden={!isOpen}
        className={cn(
          "fixed top-14 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-surface-border bg-surface transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <h2 className="text-sm font-medium text-copy-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col px-4 py-3">
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects">
          {MOCK_OWNED_PROJECTS.length === 0 ? (
            <p className="py-8 text-center text-sm text-copy-muted">
              No projects yet.
            </p>
          ) : (
            <div className="flex flex-col gap-1 py-2">
              {MOCK_OWNED_PROJECTS.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="shared">
          {MOCK_SHARED_PROJECTS.length === 0 ? (
            <p className="py-8 text-center text-sm text-copy-muted">
              No shared projects yet.
            </p>
          ) : (
            <div className="flex flex-col gap-1 py-2">
              {MOCK_SHARED_PROJECTS.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button className="w-full" onClick={openCreate}>
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
    </>
  );
}
