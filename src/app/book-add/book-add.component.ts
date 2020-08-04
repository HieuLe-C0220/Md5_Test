import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  createBook() {
    if (this.bookForm.valid) {
      console.log(this.bookForm);
      const book = this.bookForm.value;
      this.bookService.addBook(book).subscribe(
        data => {
          this.bookForm.reset();
          this.router.navigate(['/']);
        },
        err => {
          alert(err);
        }
      );
    }
  }

}
