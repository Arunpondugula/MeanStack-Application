package FullStackApp.MeanStack.Repo;


import FullStackApp.MeanStack.Entity.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookRepo extends MongoRepository<Book,String> {


}
