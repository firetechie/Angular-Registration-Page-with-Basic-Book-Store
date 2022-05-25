import { CompletedListComponent } from './completed-list/completed-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BooksDashboardComponent } from './Books-dashboard/books-dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'', redirectTo:'signup', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'viewlist', component:BooksDashboardComponent},
  {path:'dashboard', component:BooksDashboardComponent},
  {path:'completedlist', component:CompletedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
