import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Order } from './order-list/order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  oreder: Order;
  closeResult: string;
  id = 10;
  submitted = false;

  error: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }

  onSubmit() { this.submitted = true; }

  ordersBooks: Order[] = [
      new Order(1, 'book', 'Generic Book 1', 'Rupert Ellery',
        101, new Date("2017-05-17T08:23:54.000Z"), true),
      new Order(2, 'book', 'Generic Book 2', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(3, 'book', 'Generic Book 3', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(4, 'book', 'Generic Book 4', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(5, 'book', 'Generic Book 5', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), false)
    ];
  
  ordersItems: Order[] = [
      new Order(1, 'item', 'Generic Item 1', 'Rupert Ellery',
        101, new Date("2017-05-17T08:23:54.000Z"), true),
      new Order(2, 'item', 'Generic Item 2', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(3, 'item', 'Generic Item 3', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(4, 'item', 'Generic Item 4', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(5, 'item', 'Generic Item 5', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), false)
    ];

  ordersFoods: Order[] = [
      new Order(1, 'food', 'Generic Food 1', 'Rupert Ellery',
        101, new Date("2017-05-17T08:23:54.000Z"), true),
      new Order(2, 'food', 'Generic Food 2', 'Elyzabeth Truman',
        102, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(3, 'food', 'Generic Food 3', 'Sequoia Ariel',
        103, new Date("2013-10-19T08:23:54.000Z"), false),
      new Order(4, 'food', 'Generic Food 4', 'Prabhat Olympe',
        104, new Date("2013-10-19T08:23:54.000Z"), true),
      new Order(5, 'food', 'Generic Food 5', 'Emma Madhukar',
        105, new Date("2013-10-19T08:23:54.000Z"), false)
    ];

}
