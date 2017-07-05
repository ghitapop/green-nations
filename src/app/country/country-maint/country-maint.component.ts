import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Country} from "../../view-models/country";
import {AppDataService} from "../../services/app-data.service";

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries: Array<Country>;
  formError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService, private router: Router) {
    dataService.getCountries().subscribe((data) => {
      this.countries = data;
    }, (error) => {
      this.formError = error;
    });
  }

  ngOnInit() {
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

}
