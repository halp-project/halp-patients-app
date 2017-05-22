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
