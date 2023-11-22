import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})


export class BookDetailsComponent implements OnInit {

  id!: number; // using non-null assertion
  Book!: Book; // using non-null assertion

  constructor(private route: ActivatedRoute, private BookService: BookService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.BookService.getBookById(this.id).subscribe((data) => {
      this.Book = data;
    });
  }
}
