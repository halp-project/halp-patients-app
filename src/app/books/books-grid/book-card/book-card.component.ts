import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    console.log(this.book);
  }

  loanBook() {
    if(confirm("Are you sure you want to borrow the book "+this.book.title+"?")) {
      this.bookService.loanBook(this.book.id)
      .then(result => {
        if(!result){
          alert('Sorry, but this book is not available at the moment.');
        }
      })
      .catch(err => {
        console.error('An error occurred', err);
      });
    }
  }

}