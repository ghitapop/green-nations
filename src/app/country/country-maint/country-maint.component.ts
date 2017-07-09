import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Country} from "../../view-models/country";
import {AppDataService} from "../../services/app-data.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit, OnDestroy {

  countries: Array<Country>;
  formError: string;
  deletedId: number;
  isDeleting = false;
  isLoading = true;

  //observers
  countryListObs: Subscription;
  countryDeleteObs: Subscription;

  constructor(private dataService: AppDataService, private router: Router) {
    this.countryListObs = this.dataService.getCountries().subscribe((data) => {
      this.countries = data;
      this.isLoading = false;
    }, (error) => {
      this.formError = error;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.countryListObs) {
      this.countryListObs.unsubscribe();
    }
    if(this.countryDeleteObs) {
      this.countryDeleteObs.unsubscribe();
    }

  }

  cancelDelete() {
    this.isDeleting = false;
    this.deletedId = null;
  }

  deleteCountryQuestion(id: number) {
    this.formError = null;
    this.deletedId = id;
  }

  deleteCountry(id: number) {
    this.isDeleting = true;
    this.countryDeleteObs = this.dataService.deleteCountry(id).subscribe(
      c => {
        this.cancelDelete();
      },
      err => {
        this.formError = null;
        this.isDeleting = false;
      }
    );
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }
}
