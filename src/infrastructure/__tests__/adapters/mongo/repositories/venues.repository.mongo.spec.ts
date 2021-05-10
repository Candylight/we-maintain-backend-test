import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import InfrastructureModule from '../../../../infrastructure.module';

describe('VenuRepositoryMongo', () => {
  let app: INestApplication;
  let venueRepositoryMongo;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [InfrastructureModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    venueRepositoryMongo = app.get('VenueRepository');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('findByLocation', () => {
    it('Should return venues list given a latitude, longitude and radius', async () => {
      const results = await venueRepositoryMongo.findByLocation({
        latitude: 43.6432048,
        longitude: -79.42463769999999,
        radius: 1,
      });
      expect(results).toMatchObject([
        {
          id: 206,
          latitude: 43.6492659,
          longitude: -79.42233209999999,
          name: 'The Garrison, Toronto, ON, Canada',
        },
        {
          id: 2,
          latitude: 43.6432048,
          longitude: -79.42463769999999,
          name: 'The Drake Hotel, Toronto, ON, Canada',
        },
      ]);
    });
  });
});
