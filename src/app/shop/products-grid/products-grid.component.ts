import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    },
    {
      id: 2,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    },
    {
      id: 3,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    },
    {
      id: 4,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    },
    {
      id: 5,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    },
    {
      id: 6,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    },
    {
      id: 7,
      title: 'The Times',
      description: 'The Times is a British daily newspaper. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. ',
      image: 'https://pbs.twimg.com/profile_images/741575285208911872/CjQ9f3Vc.jpg',
      price: 1,
      quantity: 150
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
