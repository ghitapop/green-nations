import { Component } from '@angular/core';
import {FrameworkConfigService, FrameworkConfigSettings} from "../fw/services/framework-config.service";
import {MenuService} from "../fw/services/menu.service";
import {initialMenuItems} from "./app.menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private configService: FrameworkConfigService, private menuService: MenuService) {
    let config: FrameworkConfigSettings = {
      socialIcons: [
        {imageFile: 'assets/images/social-fb-bw.png', alt: 'Facebook', link: 'https://www.facebook.com'},
        {imageFile: 'assets/images/social-gl-bw.png', alt: 'Google', link: 'https://google.com'},
        {imageFile: 'assets/images/social-tw-bw.png', alt: 'Twitter', link: 'https://twitter.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    configService.configure(config);
    menuService.items = initialMenuItems;
  }
}
