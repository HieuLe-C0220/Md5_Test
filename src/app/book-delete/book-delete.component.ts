import { Component, OnInit } from '@angular/core';
import {IBook} from '../model/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: IBook;
  title = 'Xoá sách';

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: number;
    this.activatedRoute.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

  onClick() {
    if (confirm('Chị chắc chưa?')) {
      this.bookService.deleteBook(this.book.id).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
  }
}
