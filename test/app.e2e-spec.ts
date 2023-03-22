import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/book (GET)', () => {
    return request(app.getHttpServer())
      .get('/book')
      .expect(200)
      .expect('Hello World!');
  });

  it('/books (GET)', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect('Hello World!');
  });

  it('/book (POST)', () => {
    return request(app.getHttpServer())
      .get('/book')
      .expect(200)
      .expect('Hello World!');
  });

  it('/books (PUT)', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect('Hello World!');
  });

  it('/bookS (DELETE)', () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect('Hello World!');
  });

});
