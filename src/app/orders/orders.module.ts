import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './order-list/orders-list.component';
import { OrderItemComponent } from './order-list/order-item/order-item.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [ OrdersComponent, OrdersListComponent, OrderItemComponent ]
})
export class OrdersModule { }
