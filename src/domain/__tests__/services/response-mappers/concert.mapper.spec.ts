import { ConcertMapper } from '../../../services/response-mappers/concert.mapper';

describe('ConcertMapper', () => {
  const concerts = [
    {
      bandId: 1,
      venueId: 1,
      date: 1391573996175,
    },
    {
      bandId: 1,
      venueId: 2,
      date: 1199174515916,
    },
  ];

  describe('toConcerts', () => {
    it('Should return a formatted list of concerts', async () => {
      const results = await ConcertMapper.toConcerts(concerts);
      expect(results).toMatchObject(concerts);
    });
  });
});
