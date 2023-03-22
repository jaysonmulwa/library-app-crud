import { Injectable } from '@nestjs/common';
import { createBookDto } from 'src/books/dto/createBookDto';
import { updateBookDto } from 'src/books/dto/updateBookDto';

@Injectable()
export class BooksService {

  getBook(id): string {
    return 'getBook';
  }

  getBooks(): string {
    return 'getBooks';
  }

  addBook(createBookDto): string {
    return 'addBook';
  }

  deleteBook(id): string {
    return 'deleteBook';
  }

  updateBook(id, updateBookDto): string {
    return 'updateBook';
  }

}
