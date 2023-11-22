import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  Book : Book = new Book();

  constructor(private BookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.BookService.getBookById(id).subscribe((Book) => {
      this.Book = Book;
    });
  }

  onSubmit() {
    if (this.Book) {
      this.BookService.updateBook(this.Book._id, this.Book).subscribe((data) => {
        this.goToBookList();
      }, (error) => console.error(error));
    }
  }

  goToBookList() {
    this.router.navigate(['/books']);
  }
}
