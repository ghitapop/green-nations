import { Component, OnInit } from '@angular/core';
import {FrameworkConfigService} from "../services/framework-config.service";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private fwConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

  getSocialIcons() {
    return this.fwConfigService.socialIcons;
  }

  isShowLanguageSelector() {
    return this.fwConfigService.showLanguageSelector;
  }

  isShowUserControls() {
    return this.fwConfigService.showUserControls;
  }

}
