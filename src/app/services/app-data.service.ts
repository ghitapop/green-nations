import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {Country} from "../view-models/country";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppDataService {

  countries: Array<Country> = [
    {id: 1, name: "Switzerland", epiIndex: 87.67},
    {id: 2, name: "Luxembourg", epiIndex: 83.29},
    {id: 3, name: "Australia", epiIndex: 82.40},
    {id: 4, name: "Singapore", epiIndex: 81.78},
    {id: 5, name: "Czech Republic", epiIndex: 81.47},
    {id: 6, name: "Germany", epiIndex: 80.47},
    {id: 7, name: "Spain", epiIndex: 79.09},
    {id: 8, name: "Austria", epiIndex: 78.32},
    {id: 9, name: "Sweden", epiIndex: 78.09},
    {id: 10, name: "Norway", epiIndex: 78.04}
  ];

  constructor(private userService: UserService) { }

  createCountry(vm: Country): Observable<any> {
    return Observable.of(vm).delay(2000).do(e => {
      if(vm.id == 0) {
        let id = this.getNextId();
        vm.id = id;
        this.countries.push(vm);
      }
    });
  }

  deleteCountry(id: number): Observable<any> {
    return Observable.of({}).delay(2000).do(e => {
      this.countries.splice(this.countries.findIndex(c => c.id == id), 1);
    });
  }

  updateCountry(vm: Country): Observable<any> {
    return Observable.of(vm).delay(2000).do(e => {
      this.countries.forEach(c => {
        if(c.id == vm.id) {
          c.name = vm.name;
          c.epiIndex = vm.epiIndex;
          vm = c;
        }
      });
    });
  }

  getCountries(): Observable<any> {
    return Observable.of(this.countries).delay(1000);
  }

  getCountry(id: number): Observable<any> {
    const country = this.countries.find(c => c.id == id);
    return Observable.of(country);
  }

  private getNextId(): number {
    let id = 0;
    this.countries.forEach(c => {
      if(c.id >= id) {
        id = c.id + 1;
      }
    });
    return id;
  }
}
