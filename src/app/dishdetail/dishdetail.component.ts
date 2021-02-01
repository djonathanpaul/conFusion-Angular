import { Component, OnInit } from '@angular/core';
import {Params,ActivatedRoute} from '@angular/router';
import{Location} from '@angular/common'

import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

 
   
    dishSelected:Dish;
   
   
  constructor(private dishService: DishService, 
    private route:ActivatedRoute,
    private locationService: Location) {

   }

  ngOnInit(): void {

    let dishid= this.route.snapshot.params['id'];
    this.dishService.getParticularDish(dishid).subscribe((dish)=> this.dishSelected=dish);
    
  }

  returnBack():void{
    this.locationService.back();
  }

}
