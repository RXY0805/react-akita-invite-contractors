import { Company } from './company.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CompaniesState extends EntityState<Company> {}

@StoreConfig({ name: 'companies' })
export class CompaniesStore extends EntityStore<CompaniesState, Company> {
  constructor() {
    super();
  }
}

export const companiesStore = new CompaniesStore();
