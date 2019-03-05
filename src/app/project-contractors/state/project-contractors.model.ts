import { ID } from '@datorama/akita';
import { Contractor } from '../contractors/state';

export type ProjectContrators = {
  id: ID;
  projectName: string;
  contractors: (ID | Contractor)[];
};
