import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductCardComponent } from './products-grid/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: [ ShopComponent, ProductsGridComponent, ProductCardComponent ]
})
export class ShopModule { }
