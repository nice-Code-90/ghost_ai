"use client";

import { useState, type ReactNode } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

interface EditorLayoutProps {
  children: ReactNode;
}

/**
 * Wraps editor content with the navigation bar and collapsible project sidebar.
 * Manages sidebar visibility through the navigation toggle and sidebar close button.
 *
 * @param props - Editor layout properties.
 * @param props.children - Content displayed in the editor's main area.
 * @returns The editor shell containing the supplied content.
 */
export function EditorLayout({ children }: EditorLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
    </div>
  );
}
