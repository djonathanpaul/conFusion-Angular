//This file contains all the routes of my application

import{Routes} from '@angular/router';

 
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes:Routes=[
{path:'home', component:HomeComponent},
{path:'menu', component:MenuComponent},
{path:'contactus', component:ContactComponent},


//Define a route with a parameter included in the route definition.
{path:'dishdetail/:id',component:DishdetailComponent},

{path:'', redirectTo:'/home',pathMatch:'full'}

];

