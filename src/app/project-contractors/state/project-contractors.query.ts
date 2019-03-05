import { ProjectContratorsStore, State } from './project-contractors.store';
import { ProjectContrators } from './project-contractors.model';
import { ID, QueryEntity } from '@datorama/akita';
import { ContractorsQuery } from '../contractors/state';

import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

export class ProjectContractorsQuery extends QueryEntity<
  State,
  ProjectContrators
> {
  constructor(
    protected store: ProjectContratorsStore,
    private contractorsQuery: ContractorsQuery
  ) {
    super(store);
  }
}
