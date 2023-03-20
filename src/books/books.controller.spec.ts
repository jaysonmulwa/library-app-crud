import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe('AppController', () => {
  let booksController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = app.get<BooksController>(BooksController);
  });

  describe('Get Single Book', () => {
    it('should return "Hello World!"', () => {
      const id: string = '1';
      expect(booksController.getBook(id)).toBe('getBook');
    });
  });

  describe('Get All Books', () => {
    it('should return "Hello World!"', () => {
      expect(booksController.getBooks()).toBe('getBooks');
    });
  });

  describe('Get Single Book', () => {
    it('should return "getBook"', () => {
      const id: string = '1';
      expect(booksController.getBook(id)).toBe('getBook');
    });
  });

  describe('Get All Books', () => {
    it('should return "getBooks"', () => {
      expect(booksController.getBooks()).toBe('getBooks');
    });
  });

  describe('Add a Book', () => {
    it('should return "addBook"', () => {
      expect(booksController.addBook({})).toBe('addBook');
    });
  });

  describe('Delete a Book', () => {
    it('should return "deleteBook"', () => {
      const id: string = '1';
      expect(booksController.deleteBook(id)).toBe('deleteBook');
    });
  });

  describe('Update a Book', () => {
    it('should return "updateBook"', () => {
      const id: string = '1';
      expect(booksController.updateBook(id, {})).toBe('updateBook');
    });
  });

});
