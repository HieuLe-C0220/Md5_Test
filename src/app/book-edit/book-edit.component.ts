import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBook} from '../model/book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;

  book: IBook;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: number;
    this.activatedRoute.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });

    this.bookForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.bookService.getBookById(id).subscribe(
      data => {
        this.book = data;
        this.bookForm.patchValue(data);
      }
    );
  }
  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm);
      const book = this.bookForm.value;
      this.bookService.editBook(this.book.id, book).subscribe(
        data => {
          this.bookForm.reset('');
        },
        err => {
          alert(err);
        }
      );
      this.router.navigate(['/']);
    }
  }
}
