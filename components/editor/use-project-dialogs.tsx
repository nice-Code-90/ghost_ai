"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { MockProject } from "@/lib/mock-projects";
import { slugifyProjectName } from "@/lib/project-slug";

export type ProjectDialogKind = "create" | "rename" | "delete";

interface ProjectDialogsValue {
  activeDialog: ProjectDialogKind | null;
  selectedProject: MockProject | null;
  name: string;
  setName: (value: string) => void;
  slugPreview: string;
  isSubmitting: boolean;
  openCreate: () => void;
  openRename: (project: MockProject) => void;
  openDelete: (project: MockProject) => void;
  close: () => void;
  submit: () => void;
}

const ProjectDialogsContext =
  createContext<ProjectDialogsValue | null>(null);

export function ProjectDialogsProvider({ children }: { children: ReactNode }) {
  const [activeDialog, setActiveDialog] =
    useState<ProjectDialogKind | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<MockProject | null>(null);
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openCreate = useCallback(() => {
    setSelectedProject(null);
    setName("");
    setIsSubmitting(false);
    setActiveDialog("create");
  }, []);

  const openRename = useCallback((project: MockProject) => {
    setSelectedProject(project);
    setName(project.name);
    setIsSubmitting(false);
    setActiveDialog("rename");
  }, []);

  const openDelete = useCallback((project: MockProject) => {
    setSelectedProject(project);
    setName(project.name);
    setIsSubmitting(false);
    setActiveDialog("delete");
  }, []);

  const close = useCallback(() => {
    setActiveDialog(null);
    setSelectedProject(null);
    setName("");
    setIsSubmitting(false);
  }, []);

  const submit = useCallback(() => {
    setIsSubmitting(true);
    // Mock only — no API calls or persistence yet.
    setActiveDialog(null);
    setSelectedProject(null);
    setName("");
    setIsSubmitting(false);
  }, []);

  const slugPreview = useMemo(() => slugifyProjectName(name), [name]);

  const value = useMemo<ProjectDialogsValue>(
    () => ({
      activeDialog,
      selectedProject,
      name,
      setName,
      slugPreview,
      isSubmitting,
      openCreate,
      openRename,
      openDelete,
      close,
      submit,
    }),
    [
      activeDialog,
      selectedProject,
      name,
      slugPreview,
      isSubmitting,
      openCreate,
      openRename,
      openDelete,
      close,
      submit,
    ]
  );

  return (
    <ProjectDialogsContext.Provider value={value}>
      {children}
    </ProjectDialogsContext.Provider>
  );
}

export function useProjectDialogs(): ProjectDialogsValue {
  const value = useContext(ProjectDialogsContext);
  if (!value) {
    throw new Error(
      "useProjectDialogs must be used within ProjectDialogsProvider"
    );
  }
  return value;
}
