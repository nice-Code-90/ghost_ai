"use client";

import { useState, type ReactNode } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectDialogs } from "@/components/editor/project-dialogs";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { ProjectDialogsProvider } from "@/components/editor/use-project-dialogs";

interface EditorLayoutProps {
  children: ReactNode;
}

export function EditorLayout({ children }: EditorLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ProjectDialogsProvider>
      <div className="flex h-screen flex-col bg-base">
        <EditorNavbar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />
        <div className="relative flex flex-1">
          <ProjectSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <main className="flex-1">{children}</main>
        </div>
        <ProjectDialogs />
      </div>
    </ProjectDialogsProvider>
  );
}
