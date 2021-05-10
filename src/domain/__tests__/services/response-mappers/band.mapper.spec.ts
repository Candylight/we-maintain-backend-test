import { BandMapper } from '../../../services/response-mappers/band.mapper';

describe('BandMapper', () => {
  const bands = [
    {
      id: 1,
      name: '3 Doors Down',
    },
    {
      id: 2,
      name: '3OH!3',
    },
  ];

  describe('toBands', () => {
    it('Should return a formatted list of bands', async () => {
      const results = await BandMapper.toBands(bands);
      expect(results).toMatchObject(bands);
    });
  });
});
