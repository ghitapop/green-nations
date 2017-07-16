import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../view-models/country";

@Component({
  selector: 'app-country-panel',
  templateUrl: './country-panel.component.html',
  styleUrls: ['./country-panel.component.css']
})
export class CountryPanelComponent implements OnInit {

  @Input() country: Country;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}