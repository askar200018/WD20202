import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { Book } from "./book";
import { BOOKS } from "./mock-books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of (BOOKS);
  }

  getBook(id: number): Observable<Book> {
    return of (BOOKS.find(book => book.id == id));
  }
}
