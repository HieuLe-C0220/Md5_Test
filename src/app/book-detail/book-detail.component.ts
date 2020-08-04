import { Component, OnInit } from '@angular/core';
import {IBook} from '../model/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  titleDetail = 'Chi tiết sách';

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number;
    this.activatedRoute.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

}
