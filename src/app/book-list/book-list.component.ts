import { Component, OnInit } from '@angular/core';
import {IBook} from '../model/book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  titlePage = 'Danh sách các cuốn sách';
  bookList: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBook().subscribe(
      data => this.bookList = data
    );
  }

}
