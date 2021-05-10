import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import InfrastructureModule from '../../../../infrastructure.module';

describe('BandRepositoryMongo', () => {
  let app: INestApplication;
  let bandRepositoryMongo;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [InfrastructureModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    bandRepositoryMongo = app.get('BandRepository');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('findByBandIds', () => {
    it('Should return bands list given a list of Ids', async () => {
      const results = await bandRepositoryMongo.findByIds([1, 2]);
      expect(results).toMatchObject([
        {
          id: 1,
          name: '3 Doors Down',
        },
        {
          id: 2,
          name: '3OH!3',
        },
      ]);
    });
  });
});
