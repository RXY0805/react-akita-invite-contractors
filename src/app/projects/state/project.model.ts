import { ID, guid } from '@datorama/akita';

export type Project = {
  id: ID;
  projectName: string;
};

export function createProject(params: Partial<Project>) {
  return {
    id: guid(),
    ...params
  } as Project;
}
