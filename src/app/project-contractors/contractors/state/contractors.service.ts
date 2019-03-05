import { ContractorsStore, contractorsStore } from './contractors.store';
import { timer } from 'rxjs';
import { createContractor } from './contractor.model';

export class ContractorsService {
  constructor(private contractorsStore: ContractorsStore) {}

  fetch() {
    //call api to fetch data later
    timer(1000).subscribe(() => {
      this.contractorsStore.set([
        createContractor({
          //assign property later
        })
      ]);
    });
  }
}
