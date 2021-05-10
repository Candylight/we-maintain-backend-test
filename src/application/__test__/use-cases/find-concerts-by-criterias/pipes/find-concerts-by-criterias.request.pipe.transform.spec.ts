import { FindConcertsByCriteriasRequestPipeTransform } from '../../../../use-cases/find-concerts-by-criterias/pipes/find-concerts-by-criterias.request.pipe.transform';
import { Test } from '@nestjs/testing';

describe('FindConcertsByCriteriasRequestPipeTransform', () => {
  let findConcertsByCriteriasRequestPipeTransform: FindConcertsByCriteriasRequestPipeTransform;
  const parameters = {
    latitude: '38.9171386',
    longitude: '-77.0276204',
    radius: '20',
    bandIds: '557',
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindConcertsByCriteriasRequestPipeTransform],
    }).compile();
    findConcertsByCriteriasRequestPipeTransform = moduleRef.get<FindConcertsByCriteriasRequestPipeTransform>(
      FindConcertsByCriteriasRequestPipeTransform,
    );
  });

  describe('transformParameters', () => {
    it('Should return a parameters list formatted', async () => {
      const results = await findConcertsByCriteriasRequestPipeTransform.transformParameters(
        parameters,
      );
      expect(results).toMatchObject({
        bandIds: [557],
        latitude: 38.9171386,
        longitude: -77.0276204,
        radius: 20,
      });
    });
  });
});
