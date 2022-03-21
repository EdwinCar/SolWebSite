import { Item } from "../models/item";

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
**/
export class Dictionary {

  public static getMonths(): Array<Item> {
    const items = new Array<Item>();
    items.push(new Item('01', 'ENERO', ''));
    items.push(new Item('02', 'FEBRERO', ''));
    items.push(new Item('03', 'MARZO', ''));
    items.push(new Item('04', 'ABRIL', ''));
    items.push(new Item('05', 'MAYO', ''));
    items.push(new Item('06', 'JUNIO', ''));
    items.push(new Item('07', 'JULIO', ''));
    items.push(new Item('08', 'AGOSTO', ''));
    items.push(new Item('09', 'SEPTIEMBRE', ''));
    items.push(new Item('10', 'OCTUBRE', ''));
    items.push(new Item('11', 'NOVIEMBRE', ''));
    items.push(new Item('12', 'DICIEMBRE', ''));
    return items;
  }
}
