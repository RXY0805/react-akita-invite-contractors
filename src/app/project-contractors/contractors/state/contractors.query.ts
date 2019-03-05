import {
  ContractorsStore,
  ContractorsState,
  contractorsStore
} from './contractors.store';
import { Contractor } from './contractor.model';
import { QueryEntity } from '@datorama/akita';

export class ContractorsQuery extends QueryEntity<
  ContractorsState,
  Contractor
> {
  constructor(protected store: ContractorsStore) {
    super(store);
  }
}
export const contractorsQuery = new ContractorsQuery(contractorsStore);
