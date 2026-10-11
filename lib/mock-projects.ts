export interface MockProject {
  id: string;
  name: string;
  slug: string;
  owned: boolean;
}

export const MOCK_OWNED_PROJECTS: MockProject[] = [
  { id: "p1", name: "Marketing Site", slug: "marketing-site", owned: true },
  { id: "p2", name: "API Redesign", slug: "api-redesign", owned: true },
];

export const MOCK_SHARED_PROJECTS: MockProject[] = [
  { id: "p3", name: "Platform Audit", slug: "platform-audit", owned: false },
];
