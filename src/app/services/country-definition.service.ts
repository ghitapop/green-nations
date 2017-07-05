import { Injectable } from '@angular/core';
import {FieldDefinition} from "../../fw/dynamic-forms/model/field-definition";

@Injectable()
export class CountryDefinitionService {

  countryDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    {
      key: 'name',
      type: 'string',
      isId: false,
      label: 'Country Name',
      required: true
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    },
  ];

  constructor() { }

  getCountryDefinition() {
    return this.countryDefinition;
  }
}
