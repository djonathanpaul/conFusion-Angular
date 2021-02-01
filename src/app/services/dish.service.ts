import { Injectable } from '@angular/core';
//import { resolve } from 'dns';

import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]>{
    //Example of resolving immediately 
    //return Promise.resolve(DISHES);

    return new Promise((resolve)=>{
      setTimeout(()=> resolve(DISHES),2000);
    });
  }


  getParticularDish(id:string):Promise<Dish>{
    return new Promise((resolve)=>{
      setTimeout(()=> resolve(DISHES.filter((d)=> (d.id===id))[0]),2000);
  });
}

  getFeaturedDish():Promise<Dish>{
    return new Promise((resolve)=>{
      setTimeout(()=> resolve( DISHES.filter((d)=> d.featured)[0]),2000);
  });
}

}
