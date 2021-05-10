import { FindConcertsByCriteriasResponseMapper } from '../../../services/response-mappers/find-concerts-by-criterias.response.mapper';

describe('FindConcertsByCriteriasResponseMapper', () => {
  const bands = [
    {
      id: 1,
      name: '3 Doors Down',
    },
  ];
  const venues = [
    {
      id: 1,
      name: 'Sound Academy, Toronto, ON, Canada',
      latitude: 43.63967479999999,
      longitude: -79.3535794,
    },
    {
      id: 2,
      name: 'The Drake Hotel, Toronto, ON, Canada',
      latitude: 43.6432048,
      longitude: -79.42463769999999,
    },
  ];
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

  describe('toConcertsGateway', () => {
    it('Should return a formatted list of concerts', async () => {
      const results = await FindConcertsByCriteriasResponseMapper.toConcertsGateway(
        concerts,
        bands,
        venues,
      );
      expect(results).toMatchObject([
        {
          band: '3 Doors Down',
          date: 1391573996175,
          latitude: 43.63967479999999,
          location: 'Sound Academy, Toronto, ON, Canada',
          longitude: -79.3535794,
        },
        {
          band: '3 Doors Down',
          date: 1199174515916,
          latitude: 43.6432048,
          location: 'The Drake Hotel, Toronto, ON, Canada',
          longitude: -79.42463769999999,
        },
      ]);
    });
  });
});
