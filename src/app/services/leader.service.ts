import { Injectable } from '@angular/core';

import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

 
  getLeaders():Promise<Leader[]>{
    //return Promise.resolve(LEADERS);

    return new Promise((resolve)=>{
      setTimeout(()=> resolve(LEADERS),2000);
    });
  }


  getFeaturedLeader():Promise<Leader>{

    return new Promise((resolve)=>{
      setTimeout(()=> resolve(LEADERS.filter((ldr)=>ldr.featured )[0]),2000);
  });
}
}