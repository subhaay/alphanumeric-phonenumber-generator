import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PhoneNumber} from "../interfaces/phone-number";

@Injectable({
  providedIn: 'root'
})
export class GenerateCombService {
  phoneNumber$ = new BehaviorSubject<string>('');
  alphaNumericMap = ['0', '1', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PRS', 'TUV', 'WXY'];

  getLatestPhoneNumber(value: string) {
    this.phoneNumber$.next(value);
  }

  getPhoneNumber(phoneNumber: string): Observable<any> {
    const phoneNumberObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.generate(phoneNumber));
      }, 1000);
    });
    return phoneNumberObservable;
  }

  /**
   * Algorithm to generate the phone number combination
   * @param phoneNumber
   */
  generate(phoneNumber: string): PhoneNumber[] {
    let result: PhoneNumber[] = [];
    let queue = ['']
    let i = 1;
    while (queue.length > 0) {
      //popping the left most item from the queue
      let chars = queue[0];
      queue.shift();
      if (chars.length == phoneNumber.length) {
        result.push({id: i++, name: chars})
      } else {
        //get the next phone number digit
        let next = Number(phoneNumber[chars.length]);
        //use the digit to get the appropriate alpha numeric characters from the map
        let variation = this.alphaNumericMap[next];
        for (let n = 0; n < variation.length; n++) {
          queue.push(chars + variation[n]);
        }
      }
    }
    return result;
  }
}
