"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  sidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  const SidebarToggleIcon = sidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="flex h-14 items-center justify-between border-b border-surface-border bg-surface px-4">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={sidebarOpen}
        >
          <SidebarToggleIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center" />
      <div className="flex items-center" />
    </header>
  );
}
