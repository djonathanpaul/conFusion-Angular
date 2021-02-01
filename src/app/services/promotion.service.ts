import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotionsRunning';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
       return of(PROMOTIONS).pipe(delay(2000));
  }

  getParticularPromotion(id: string): Observable<Promotion> {

    // return new Promise((resolve) => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((p) => (p.id === id))[0]), 2000);

    // });

    return of(PROMOTIONS.filter((p) => (p.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    

    return of(PROMOTIONS.filter((p) => p.featured)[0]).pipe(delay(2000));
  }
}
