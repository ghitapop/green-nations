import {MenuItem} from "../fw/services/model/menu-item";

export let initialMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon-dashboard',
    route: '/dashboard',
    submenu: null
  },
  {
    text: 'Countries',
    icon: 'glyphicon-flag',
    route: '/countries',
    submenu: null
  },
  {
    text: 'Settings',
    icon: 'glyphicon-wrench',
    route: '/settings',
    submenu: null
  }
];
