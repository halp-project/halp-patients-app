import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopCardComponent } from './shop-grid/shop-card/shop-card.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ ShopComponent, ShopGridComponent, ShopCardComponent ]
})
export class ShopModule { }