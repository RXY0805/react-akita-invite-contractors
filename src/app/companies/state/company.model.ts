import { ID, guid } from '@datorama/akita';

export type Company = {
  id: ID;
  name: string;
  address: string;
  abn: number;
};

export function createCompany(params: Partial<Company>) {
  return {
    id: guid(),
    ...params
  } as Company;
}
