import { Injectable } from '@angular/core';

import{Promotion} from '../shared/promotion';
import{PROMOTIONS} from '../shared/promotionsRunning'

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
    //return Promise.resolve(PROMOTIONS);

    return new Promise((resolve)=>{
      setTimeout(()=> resolve(PROMOTIONS),2000);
    });
  }

  getParticularPromotion(id:string):Promise<Promotion>{

    return new Promise((resolve)=>{
      setTimeout(()=> resolve(PROMOTIONS.filter((p)=>(p.id===id))[0]),2000);

  });
}

  getFeaturedPromotion():Promise<Promotion>{
    return new Promise((resolve)=>{
      setTimeout(()=> resolve(PROMOTIONS.filter((p)=> p.featured)[0]),2000);
  });
}
}
