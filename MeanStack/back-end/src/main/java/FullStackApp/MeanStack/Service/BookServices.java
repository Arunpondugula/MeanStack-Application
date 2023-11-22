package FullStackApp.MeanStack.Service;

import FullStackApp.MeanStack.Entity.Book;
import FullStackApp.MeanStack.Repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServices {
    @Autowired
    private BookRepo repo;

    public void saveorUpdate(Book books) {
        repo.save(books);


    }

    public Iterable<Book> listAll() {
        return this.repo.findAll();
    }

    public void deleteBook(String id) {
        repo.deleteById(id);
    }



    public Book getBookByID(String bookid) {
        return repo.findById(bookid).get();
    }
}
