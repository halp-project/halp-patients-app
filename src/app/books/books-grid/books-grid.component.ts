import { Component, OnInit } from '@angular/core';

import { Book } from './book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  error: any;
  books: Book[] = [];
  /*books: Book[] = [
    {
      id: 1,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 2,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 3,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 4,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 5,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 6,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    },
    {
      id: 7,
      title: 'Atomic Design',
      author: 'Brad Frost',
      description: 'Atomic Design details all that goes into creating and maintaining robust design systems.',
      image: 'http://atomicdesign.bradfrost.com/images/book-cover.svg'
    }
  ];*/

  constructor(private bookService: BookService) { }

  getBooks(): void{
    this.bookService.getBooks()
      .then(books => this.books = books)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getBooks();
  }

}
