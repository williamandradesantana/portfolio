import { type SkillsModel } from "../skills/skills";

export type StackModel = Omit<SkillsModel, "type">;
