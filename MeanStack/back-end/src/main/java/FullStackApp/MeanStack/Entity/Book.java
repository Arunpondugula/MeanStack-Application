package FullStackApp.MeanStack.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;





@Document(collection = "books")
public class Book {

    @Id
    private String _id;
    private String bookname;
    private String author;
    private String publication ;

    public Book(String _id, String bookname, String author, String publication) {
        this._id = _id;
        this.bookname = bookname;
        this.author = author;
        this.publication = publication;
    }

    public Book() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublication() {
        return publication;
    }

    public void setPublication(String publication) {
        this.publication = publication;
    }

    @Override
    public String toString() {
        return "Book{" +
                "_id='" + _id + '\'' +
                ", bookname='" + bookname + '\'' +
                ", author='" + author + '\'' +
                ", itin='" + publication + '\'' +
                '}';
    }
}
