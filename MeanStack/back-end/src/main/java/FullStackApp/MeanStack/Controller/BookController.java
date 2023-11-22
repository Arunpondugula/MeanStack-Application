package FullStackApp.MeanStack.Controller;
import FullStackApp.MeanStack.Entity.Book;
import FullStackApp.MeanStack.Service.BookServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("api/v1/book")
@CrossOrigin
//@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    private BookServices bookServices;

    @PostMapping(value = "/save")
    private String saveBook(@RequestBody Book books) {

        bookServices.saveorUpdate(books);
        return books.get_id();
    }

    @GetMapping(value = "/getall")
    public Iterable<Book> getBooks() {
        return bookServices.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private Book update(@RequestBody Book book, @PathVariable(name = "id") String _id) {
        book.set_id(_id);
        bookServices.saveorUpdate(book);
        return book;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteBook(@PathVariable("id") String _id) {
        bookServices.deleteBook(_id);
    }


    @RequestMapping("/search/{id}")
    private Book getBooks(@PathVariable(name = "id") String bookid) {
        return bookServices.getBookByID(bookid);
    }

}