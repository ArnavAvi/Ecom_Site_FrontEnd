import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {TestComponent} from './test/test.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AddproductComponent} from './addproduct/addproduct.component';
// import {OrderhistoryComponent} from './orderhistory/orderhistory.component';

export const MAIN_ROUTES: Routes = [    /*custom routes stored as array*/
  {
    path: '',               /*in case of no / in uri this component will redirected to*/
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home' , component : HomeComponent       /*on matching this uri HC will be opened*/
  },
  {
    path: 'signup' , component : SignupComponent
  },
  {
    path: 'login' , component : LoginComponent
  },
  {
    // path: 'productdetails/:id/:name/:image/:detail/:price', component : ProductDetailsComponent
    path: 'productdetails/:id/:name/:imageSrc/:catagory/:detail/:price', component : ProductDetailsComponent
  },
  {
    path: 'usercart', component: UserCartComponent
  },
  {
    path: 'test', component: TestComponent
  },
  {
    path: 'addproduct', component: AddproductComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
