"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
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
          <p className="py-8 text-center text-sm text-copy-muted">
            No projects yet.
          </p>
        </TabsContent>
        <TabsContent value="shared">
          <p className="py-8 text-center text-sm text-copy-muted">
            No shared projects yet.
          </p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button className="w-full">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
