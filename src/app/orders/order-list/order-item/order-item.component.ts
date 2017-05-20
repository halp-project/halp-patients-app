import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

import { Order } from '../order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;
  @Output() _delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getButtonClass() {
    if (!this.order.completed) {
      return "btn btn-warning";
    } else {
      return "btn btn-success";
    }
  }

  getButtonImg() {
    if (!this.order.completed) {
      return "fa fa-clock-o";
    } else {
      return "fa fa-check-circle-o";
    }
  }

}
