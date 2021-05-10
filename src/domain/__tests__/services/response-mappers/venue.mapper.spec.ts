import { VenueMapper } from '../../../services/response-mappers/venue.mapper';

describe('VenueMapper', () => {
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

  describe('toVenues', () => {
    it('Should return a formatted list of venues', async () => {
      const results = await VenueMapper.toVenues(venues);
      expect(results).toMatchObject(venues);
    });
  });
});
