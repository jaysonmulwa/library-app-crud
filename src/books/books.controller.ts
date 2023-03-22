import { Controller, Get, Post, Delete, Patch, Body, Param, Res, HttpStatus} from '@nestjs/common';
import { BooksService } from './books.service';
import { createBookDto } from 'src/books/dto/createBookDto';
//import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get(':id')
  getBook(@Param('id') id: string, @Res() res: Response) :string {
    const _request = this.booksService.getBook(+id);
    return _request;
  }

  @Get('')
  getBooks(): string {
    return this.booksService.getBooks();
  }

  @Post()
  addBook(@Body() createBookDto): string {
    return this.booksService.addBook(createBookDto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): string {
    return this.booksService.deleteBook(+id);
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() createBookDto): string {
    return this.booksService.updateBook(+id, createBookDto);
  }
  
}
