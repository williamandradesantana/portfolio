import type { StackModel } from "../stack/stack";

export type ProjectsModel = {
  name: string;
  description: string;
  repositoryLink: string;
  applicationLink?: string;
  stack: StackModel[];
  observation?: string;
};
