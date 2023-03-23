import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createBookDto } from 'src/books/dto/createBookDto';
import { updateBookDto } from 'src/books/dto/updateBookDto';
import { Book } from './books.entity';
import { DeleteResult, Repository  } from 'typeorm';

@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
  ) {}

  getBook(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id: id });
  }

  getBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  addBook(createBookDto: createBookDto): Promise<Book> {
    const book = new Book();
    book.title = createBookDto.title;
    book.isbn = createBookDto.isbn;
    book.author = createBookDto.author;
    return this.booksRepository.save(book);
  }

  deleteBook(id: number): Promise<DeleteResult> {
    return this.booksRepository.delete(id);
  }

  updateBook(id: number, updateBookDto: updateBookDto): Promise<Book> {
      const book = new Book();
      book.id = id;
      book.title = updateBookDto.title;
      book.isbn = updateBookDto.isbn;
      book.author = updateBookDto.author;
      return this.booksRepository.save(book);
  }

}
