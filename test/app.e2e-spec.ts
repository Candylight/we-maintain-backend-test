import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('Find concerts by criterias (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/concerts (GET) with latitude, longitude, radius & bandIds should return 4 results', () => {
    return request(app.getHttpServer())
      .get(
        '/concerts?latitude=38.9171386&longitude=-77.0276204&radius=20&bandIds=557',
      )
      .expect(200)
      .expect([
        {
          band: 'K-OS',
          location: 'Rock & Roll Hotel, Washington, DC, US',
          date: 1576483301144,
          latitude: 38.899994,
          longitude: -76.986572,
        },
        {
          band: 'K-OS',
          location: 'Hill Country BBQ - Washington, Washington, DC, US',
          date: 1438126926346,
          latitude: 38.8951909,
          longitude: -77.02223359999999,
        },
        {
          band: 'K-OS',
          location: 'Rock & Roll Hotel, Washington, DC, US',
          date: 1576483301144,
          latitude: 38.899994,
          longitude: -76.986572,
        },
        {
          band: 'K-OS',
          location: 'Hill Country BBQ - Washington, Washington, DC, US',
          date: 1438126926346,
          latitude: 38.8951909,
          longitude: -77.02223359999999,
        },
      ]);
  });

  it('/concerts (GET) without parameters should throw an HTTP error', () => {
    return request(app.getHttpServer()).get('/concerts').expect({
      statusCode: 400,
      message: 'You must filter by bandIds OR by latitude/longitude/radius',
    });
  });
});
