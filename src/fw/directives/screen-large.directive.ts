import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {ScreenService} from '../services/screen.service';
import {Subscription} from "rxjs/Subscription";

@Directive({
  selector: '[screenLarge]'
})
export class ScreenLargeDirective implements OnDestroy {
  private hasView = false;
  private screenSubsription: Subscription;

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<Object>, private screenService: ScreenService) {
    this.screenSubsription = screenService.resize$.subscribe(() => this.onResize());
  }

  @Input()
  set screenLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

    if(condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if(!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  onResize() {
    // trigger the setter, note: assigning value false doesn't mean anything is just a way to trigger the setter
    this.screenLarge = false;
  }

  ngOnDestroy(): void {
    this.screenSubsription.unsubscribe();
  }
}
