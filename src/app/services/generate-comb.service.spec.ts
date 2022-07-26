import {TestBed} from '@angular/core/testing';

import {GenerateCombService} from './generate-comb.service';
import {PhoneNumber} from "../interfaces/phone-number";

describe('GenerateCombService', () => {
  let service: GenerateCombService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateCombService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getData should filter out data', (done) => {
    const expectedData: PhoneNumber[] = [
      {
        "id": 1,
        "name": "1G"
      },
      {
        "id": 2,
        "name": "1H"
      },
      {
        "id": 3,
        "name": "1I"
      }
    ]
    service.getPhoneNumber('14').subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
  });

  it('should call getLatestPhoneNumber', () => {
    service.phoneNumber$.next("123456");
    service.getLatestPhoneNumber("123456");
    expect(service).toBeTruthy();
  });


});
