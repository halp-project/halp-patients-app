import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'shop', loadChildren: 'app/shop/shop.module#ShopModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }