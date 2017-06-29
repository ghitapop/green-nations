import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer} from '@angular/core';
import {MenuItem} from "../../services/model/menu-item";
import {MenuService} from "../../services/menu.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;
  isActiveRoute = false;

  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 34;

  constructor(private router: Router, private menuService: MenuService, private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.checkActiveRoute(this.router.url);
  }

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.stopPropagation();
    if(this.item.submenu) {
      if(this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if(this.item.route) {
      let newEvent = new MouseEvent('mouseleave', {bubbles: true});
      this.renderer.invokeElementMethod(
        this.el.nativeElement, 'dispatchEvent', [newEvent]
      );

      this.router.navigate(['/' + this.item.route]);
    }
  }

  checkActiveRoute(route: string) {
    this.isActiveRoute = (route === '/' + this.item.route);

    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationEnd) {
          this.checkActiveRoute(event.url);
          //console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
        }
      });
  }

  onPopupMouseEnter(event): void {
    if(!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event): void {
    if(!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if(!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event): void {
    if(!this.menuService.isVertical) {
      if(this.item.submenu) {
        this.mouseInItem = true;
        if(this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }

}
