import { Controller, Get, Post, Delete, Patch, Body, Param} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get(':id')
  getBook(@Param('id') id: string): string {
    return this.booksService.getBook(+id);
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
