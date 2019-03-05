import { ProjectContrators } from './project-contractors.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface State extends EntityState<ProjectContrators> {}

@StoreConfig({ name: 'projectContrators' })
export class ProjectContratorsStore extends EntityStore<
  State,
  ProjectContrators
> {
  constructor() {
    super();
  }
}
