import { Injectable } from '@angular/core';
import {MenuItem} from "./model/menu-item";

@Injectable()
export class MenuService {
  items: Array<MenuItem>;
  isVertical = true;
  showingLeftSideMenu = false;

  constructor() { }

  toggleLeftSideMenu(): void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

  toggleMenuOrientation(): void {
    this.isVertical = !this.isVertical;
  }

}
