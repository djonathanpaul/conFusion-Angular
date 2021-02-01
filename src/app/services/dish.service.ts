import { Injectable } from '@angular/core';
//import { resolve } from 'dns';

import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]>{
    //Example of resolving immediately 
    //return Promise.resolve(DISHES);

    // ****Example of returning a promise after some latency
    // return new Promise((resolve)=>{
    //   setTimeout(()=> resolve(DISHES),2000);
    // });

    return of(DISHES).pipe(delay(2000));
  }


  getParticularDish(id:string):Observable<Dish>{
    // return new Promise((resolve)=>{
    //   setTimeout(()=> resolve(DISHES.filter((d)=> (d.id===id))[0]),2000);
    // });

    return of(DISHES.filter((d)=> (d.id===id))[0]).pipe(delay(2000)); //Returning promise from an observable

  }

  

  getFeaturedDish(): Observable<Dish> {
    // return new Promise((resolve) => {
    //   setTimeout(() => resolve(DISHES.filter((d) => d.featured)[0]), 2000);
    // });

    return of(DISHES.filter((d) => d.featured)[0]).pipe(delay(2000));

  }

}
