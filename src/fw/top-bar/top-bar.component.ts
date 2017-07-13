import { UserAPI } from 'fw/users/user.api';
import { Component, OnInit } from '@angular/core';
import {FrameworkConfigService, IconFiles} from "../services/framework-config.service";

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  username: string;
  pageError: string;

  constructor(private fwConfigService: FrameworkConfigService, private userAPI: UserAPI) {
    this.userAPI.getUserInfo().subscribe((data) => {
      this.username = data;
    }, (error) => {
      this.pageError = error;
    });
  }

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

  signOut() {
    this.userAPI.signOut();
  }

  getLoggedUsername() {
    return this.username;
  }

}
