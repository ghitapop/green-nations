import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPanelComponent } from './country-panel.component';

describe('CountryPanelComponent', () => {
  let component: CountryPanelComponent;
  let fixture: ComponentFixture<CountryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
