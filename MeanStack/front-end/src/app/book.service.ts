import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8090/api/v1/book";

  constructor(private httpClient: HttpClient) { }
  

  private baseURL1 = "http://localhost:8090/api/v1/book/getall";
  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL1}`);
  }

  private baseURL2 = "http://localhost:8090/api/v1/book/save";
  createBook(Book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}`,Book);
  }

  private baseURL3 = "http://localhost:8090/api/v1/book/search";
  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL3}/${id}`);
  }

  private baseURL4 = "http://localhost:8090/api/v1/book/edit";
  updateBook(id: number, Book: Book): Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${id}`, Book);
  }
  private baseURL5 = "http://localhost:8090/api/v1/book/delete";
  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL5}/${id}`);
  }

}