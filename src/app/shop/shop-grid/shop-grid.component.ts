import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

import { Shop } from './shop';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit, OnChanges {
    
  @Input() newShop: Shop;
  @Output() editedShop: EventEmitter<Shop> = new EventEmitter();

  shop: Shop[] = [
    {
      name: 'Book 1',
      id: 1,
      description: 'Book Description.',
      image: 'http://www.iconsdb.com/icons/preview/royal-blue/book-xxl.png'
    },
    {
      name: 'Book 2',
      id: 2,
      description: 'Book Description.',
      image: 'http://www.iconsdb.com/icons/preview/royal-blue/book-xxl.png'
    },
    {
      name: 'Book 3',
      id: 3,
      description: 'Book Description.',      
      image: 'http://www.iconsdb.com/icons/preview/royal-blue/book-xxl.png'
    },
    {
      name: 'Book 4',
      id: 4,
      description: 'Book Description.',
      image: 'http://www.iconsdb.com/icons/preview/royal-blue/book-xxl.png'
    },
    {
      name: 'Book 5',
      id: 5,
      description: 'Book Description.',
      image: 'http://www.iconsdb.com/icons/preview/royal-blue/book-xxl.png'
    },
    {
      name: 'Book 6',
      id: 6,
      description: 'Book Description.',
      image: 'http://www.iconsdb.com/icons/preview/royal-blue/book-xxl.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.shop.push(changedProperty.currentValue);
      }
    }
  }

  deleteShop(shopId) {
    this.shop.splice(shopId, 1);
  }

  editShop(shop) {
    this.editedShop.emit(shop);
  }

}