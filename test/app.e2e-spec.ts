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

  describe('/api/products', () => {
    it('/ (GET)', async () => {
      return await request(app.getHttpServer())
        .get('/products')
        .expect(200)
        .then(({ body }) => {
          expect(Array.isArray(body)).toBe(true);
        });
    });

    it('/ (POST)', async () => {
      return await request(app.getHttpServer())
        .post('/products')
        .send({ name: 'test', price: 100, image: 'http:// ' })
        .expect(201)
        .then(({ body }) => {
          expect(body.hasOwnProperty('_id')).toBe(true);
          expect(body.name).toEqual('test');
          expect(body.price).toEqual(100);
        });
    });

    // it('/:id (GET)', async () => {
    //   return await request(app.getHttpServer())
    //     .get('/products/1')
    //     .expect(200)
    //     .then(({ body }) => {
    //       expect(body.name).toEqual('test');
    //       expect(body.price).toEqual(100);
    //     });
    // });
  });

  afterAll(async () => {
    await app.close();
  });
});
