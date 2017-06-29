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
    route: null,
    submenu: [
      {
        text: 'Select',
        icon: 'glyphicon-expand',
        route: null,
        submenu: [
          {
            text: 'USA',
            icon: 'glyphicon-flag',
            route: 'country-detail/USA',
            submenu: null
          },
          {
            text: 'Romania',
            icon: 'glyphicon-flag',
            route: 'country-detail/Romania',
            submenu: null
          },
          {
            text: 'UK',
            icon: 'glyphicon-flag',
            route: 'country-detail/UK',
            submenu: null
          },
          {
            text: 'Luxembourg',
            icon: 'glyphicon-flag',
            route: 'country-detail/Luxembourg',
            submenu: null
          }
        ]
      },
      {
        text: 'Top 3',
        icon: 'glyphicon-expand',
        route: 'country-list/3',
        submenu: null
      },
      {
        text: 'Top 10',
        icon: 'glyphicon-expand',
        route: 'country-list/10',
        submenu: null
      },
      {
        text: 'All',
        icon: 'glyphicon-expand',
        route: 'country-list/0',
        submenu: null
      }
    ]
  },
  {
    text: 'Settings',
    icon: 'glyphicon-wrench',
    route: '/settings',
    submenu: [
      {
        text: 'Country List',
        icon: 'glyphicon-th-list',
        route: 'country-maint',
        submenu: null
      },
      {
        text: 'Settings',
        icon: 'glyphicon-cog',
        route: 'settings',
        submenu: null
      }
    ]
  }
];
