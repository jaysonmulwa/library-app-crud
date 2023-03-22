import { Controller, Get, Post, Delete, Patch, Body, Param, Res, HttpStatus} from '@nestjs/common';
import { BooksService } from './books.service';
import { createBookDto } from './dto/createBookDto';
import { Response } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get(':id')
  getBook(@Param('id') id: string, @Res() res: Response) {
    const _request = this.booksService.getBook(+id);
    res.status(HttpStatus.OK).send(_request);
  }

  @Get('')
  getBooks(@Res() res: Response) {
    const _request = this.booksService.getBooks();
    res.status(HttpStatus.OK).send(_request);
  }

  @Post()
  addBook(@Body() createBookDto, @Res() res: Response) {
    const _request = this.booksService.addBook(createBookDto);
    res.status(HttpStatus.OK).send(_request);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string, @Res() res: Response) {
    const _request = this.booksService.deleteBook(+id);
    res.status(HttpStatus.OK).send(_request);
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() createBookDto, @Res() res: Response) {
    const _request = this.booksService.updateBook(+id, createBookDto);
    res.status(HttpStatus.OK).send(_request);
  }
  
}
