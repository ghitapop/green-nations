import {MenuItem} from "../fw/services/model/menu-item";

export let initialMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'glyphicon-dashboard',
    route: 'authenticated/dashboard',
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
            route: 'authenticated/country-detail/USA',
            submenu: null
          },
          {
            text: 'Romania',
            icon: 'glyphicon-flag',
            route: 'authenticated/country-detail/Romania',
            submenu: null
          },
          {
            text: 'UK',
            icon: 'glyphicon-flag',
            route: 'authenticated/country-detail/UK',
            submenu: null
          },
          {
            text: 'Luxembourg',
            icon: 'glyphicon-flag',
            route: 'authenticated/country-detail/Luxembourg',
            submenu: null
          }
        ]
      },
      {
        text: 'Top 3',
        icon: 'glyphicon-expand',
        route: 'authenticated/country-list/3',
        submenu: null
      },
      {
        text: 'Top 5',
        icon: 'glyphicon-expand',
        route: 'authenticated/country-list/5',
        submenu: null
      },
      {
        text: 'All',
        icon: 'glyphicon-expand',
        route: 'authenticated/country-list/0',
        submenu: null
      }
    ]
  },
  {
    text: 'Settings',
    icon: 'glyphicon-wrench',
    route: 'authenticated/settings',
    submenu: [
      {
        text: 'Country List',
        icon: 'glyphicon-th-list',
        route: 'authenticated/country-maint',
        submenu: null
      },
      {
        text: 'Settings',
        icon: 'glyphicon-cog',
        route: 'authenticated/settings',
        submenu: null
      }
    ]
  }
];

