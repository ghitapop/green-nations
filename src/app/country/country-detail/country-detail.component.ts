import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppDataService} from "../../services/app-data.service";
import {Country} from "../../view-models/country";
import {FieldDefinition} from "../../../fw/dynamic-forms/model/field-definition";
import {CountryDefinitionService} from "../../services/country-definition.service";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  operation: string;
  country: Country;
  errorMessage: string;
  countryDefinition: Array<FieldDefinition>;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: AppDataService, private countryDefService: CountryDefinitionService) { }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];
    this.countryDefinition = this.countryDefService.getCountryDefinition();

    if(this.operation === 'create') {
      this.country = {id: 0, name: "", epiIndex: null};
    } else {
        this.dataService.getCountry(this.route.snapshot.params['id']).subscribe((country: Country) => {
        this.country = country;
      }, (error) => {
        this.errorMessage = error;
      });
    }
  }


   updateCountry(country: Country) {
    this.errorMessage = null;
    this.dataService.updateCountry(country).subscribe(
      c => {
          this.router.navigate(['/authenticated/country-maint']);
      },
      err => {
          this.errorMessage = 'Error updating country';
      }
    );
  }

  createCountry(country: Country) {
      this.errorMessage = null;
      this.dataService.createCountry(country).subscribe(
        c => {
            this.router.navigate(['/authenticated/country-maint']);
        },
        err => {
            this.errorMessage = 'Error creating country';
        }
      );
  }

}
