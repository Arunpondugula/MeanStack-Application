import { Component,OnInit } from '@angular/core';
import { Book } from '../book';


import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] =[];
  //id!: number ;
  //id = this.activatedRoute.snapshot.params['id'];
  

  constructor(
    private BookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBooks();
    
  }

  private getBooks(): void {
    this.BookService.getBooksList().subscribe((data) => {
      this.books = data;
      console.log(this.books)
    });
  }
  
  BookDetails(id:number){
    
    //const id = this.activatedRoute.snapshot.params['id'];

    this.router.navigate(['/book-details',id]);
  }

  updateBook(id:number) {
    if (id) {
      this.router.navigate(['/edit-book',id]);
    } else {
      alert(id)
    }
  }

  deleteBook(id: number){
    this.BookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.getBooks();
    });
  }

  
}

