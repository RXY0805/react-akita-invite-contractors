import { Contractor } from './contractor.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ContractorsState extends EntityState<Contractor> {}

@StoreConfig({ name: 'contractors' })
export class ContractorsStore extends EntityStore<
  ContractorsState,
  Contractor
> {
  constructor() {
    super();
  }
}

export const contractorsStore = new ContractorsStore();
