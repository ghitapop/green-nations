import { Injectable } from '@angular/core';
import {MenuItem} from "./model/menu-item";

@Injectable()
export class MenuService {
  items: Array<MenuItem>;
  isVertical = false;

  constructor() { }

}
