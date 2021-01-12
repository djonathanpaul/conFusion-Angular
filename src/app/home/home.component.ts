import { Component, OnInit } from '@angular/core';

import{Dish} from '../shared/dish';
import{DishService} from '../services/dish.service';
import{Promotion} from '../shared/promotion';
import{PromotionService} from '../services/promotion.service';
import{Leader} from '../shared/leader';
import{LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredDish:Dish;
  featuredPromotion:Promotion;
  featuredLeader:Leader;
  //Injecting services using the constructor
  constructor(private dishService:DishService, 
    private promotionService:PromotionService,
    private leaderService:LeaderService){

   }

  ngOnInit(): void {
    // Fetching Featured Dishes

    this.featuredDish = this.dishService.getFeaturedDish();
    this.featuredPromotion = this.promotionService.getFeaturedPromotion();
    this.featuredLeader = this.leaderService.getFeaturedLeader();
  }

}
