import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookEditComponent} from './book-edit/book-edit.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  },
  {
    path: 'addBook',
    component: BookAddComponent
  },
  {
    path: 'deleteBook/:id',
    component: BookDeleteComponent
  },
  {
    path: 'editBook/:id',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
