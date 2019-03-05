import { ID, guid } from '@datorama/akita';

export type Contractor {
  id?: ID;
  companyId?: number;
  companyName?: string;
  statusId: number;
  onSite: number;
  auditComplete: number;
  licenceExpires?: string;
  auditUserName?: string;
  projectId: number;
  //contactPerson: ContactPerson[];
  [key: number]: any;
}

export function createContractor(params: Partial<Contractor>) {
  return {
    id: guid(),
    ...params
  } as Contractor;
}
