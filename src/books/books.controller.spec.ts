import { Test, TestingModule } from '@nestjs/testing';
import { Res } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { createBookDto } from './dto/createBookDto';
import { updateBookDto } from './dto/updateBookDto';

describe('AppController', () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService, { provide: BooksService, useValue: {
        addBook: jest
          .fn()
          .mockImplementation((user: createBookDto) =>
            Promise.resolve({ id: '1'}),
          ),} }],
    }).compile();
    
    booksController = app.get<BooksController>(BooksController);
    booksService = app.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(booksController).toBeDefined();
  });

  describe('Add a Book', () => {
    it('should return "addBook"', () => {
      
      const _addBook: createBookDto = {
        title: 'test',
        isbn: 'test',
        author: 'test',
      };


      //booksController.addBook(_addBook, response);
      //expect(booksService.addBook).toHaveBeenCalled();
      //expect(booksService.addBook(_addBook)).not.toBeNull();
    });
  });

  // describe('Get Single Book', () => {
  //   it('should return "Hello World!"', () => {
  //     const id: number = 1;
  //     expect(booksService.getBook(id)).toBe('getBook');
  //   });
  // });

  // describe('Get All Books', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(booksService.getBooks()).toBe('getBooks');
  //   });
  // });

  // describe('Get Single Book', () => {
  //   it('should return "getBook"', () => {
  //     const id: number = 1;
  //     expect(booksService.getBook(id)).toBe('getBook');
  //   });
  // });

  // describe('Get All Books', () => {
  //   it('should return "getBooks"', () => {
  //     expect(booksService.getBooks()).toBe('getBooks');
  //   });
  // });

  // describe('Update a Book', () => {
  //   it('should return "updateBook"', () => {
  //     const id: number = 1;
  //     const updateBook: updateBookDto = {
  //       title: 'test',
  //       isbn: 'test',
  //       author: 'test',
  //     };
  //     expect(booksService.updateBook(id, updateBook)).toBe('updateBook');
  //   });
  // });

  // describe('Delete a Book', () => {
  //   it('should return "deleteBook"', () => {
  //     const id: string = '1';
  //     expect(booksService.deleteBook(+id)).toBe('deleteBook');
  //   });
  // });

});
