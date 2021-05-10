import { Concert } from '../../models/concert.model';
import { Band } from '../../models/band.model';
import { Venue } from '../../models/venue.model';
import { ConcertGateway } from '../../models/concert-gateway.model';

export class FindConcertsByCriteriasResponseMapper {
  /**
   * Extract the properties within the differents entities to build the new ConcertGateway Object according to Domain Model.
   *
   * @param concert Concert
   * @param band Band
   * @param venue Venue
   * @return ConcertGateway
   */
  private static toConcertGateway(
    concert: Concert,
    band: Band,
    venue: Venue,
  ): ConcertGateway {
    return new ConcertGateway(
      band.name,
      venue.name,
      concert.date,
      venue.latitude,
      venue.longitude,
    );
  }

  /**
   * Aggregate returned Concert[], Band[] and Venue[] within the criterias of the request and return a ConcertGateway[]
   * with the right response format(following the ConcertGateway Domain Model)
   *
   * @param concerts Concert[]
   * @param bands Band[]
   * @param venues Venue[]
   * @return ConcertGateway[]
   */
  public static toConcertsGateway(
    concerts: Concert[],
    bands: Band[],
    venues: Venue[],
  ): ConcertGateway[] {
    const concertsGateway = new Array<ConcertGateway>();

    concerts.forEach((concert) => {
      const bandFind = bands.find((band) => band.id === concert.bandId);
      const venueFind = venues.find((venue) => venue.id === concert.venueId);

      // We add concerts responding to either criteria
      if (bandFind && venueFind) {
        const concertGateway = this.toConcertGateway(
          concert,
          bandFind,
          venueFind,
        );
        concertsGateway.push(concertGateway);
      }
    });

    return concertsGateway;
  }
}
