/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
**/
export class Item {
  id: string;
  name: string;
  value: string;

  constructor(ids: string, names: string, values: string) {
    this.id = ids;
    this.name = names;
    this.value = values;
  }
}
