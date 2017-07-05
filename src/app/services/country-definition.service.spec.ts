import { TestBed, inject } from '@angular/core/testing';

import { CountryDefinitionService } from './country-definition.service';

describe('CountryDefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryDefinitionService]
    });
  });

  it('should be created', inject([CountryDefinitionService], (service: CountryDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
