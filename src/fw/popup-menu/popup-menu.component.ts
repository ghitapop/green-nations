import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {MenuItem} from "../services/model/menu-item";

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<MenuItem>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
