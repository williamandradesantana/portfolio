import type { StackModel } from "../stack/stack";

export type ProjectsModel = {
  name: string;
  description: string;
  repositoryLink: string;
  applicationLink?: string | null;
  stack: StackModel;
  observation?: string | null;
};
