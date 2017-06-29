import { Component, OnInit } from '@angular/core';
import {FrameworkConfigService, IconFiles} from "../services/framework-config.service";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private fwConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

  getSocialIcons(): Array<IconFiles> {
    return this.fwConfigService.socialIcons;
  }

  isShowLanguageSelector(): boolean {
    return this.fwConfigService.showLanguageSelector;
  }

  isShowUserControls(): boolean {
    return this.fwConfigService.showUserControls;
  }

}
