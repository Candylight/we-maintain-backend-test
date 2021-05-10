import { VenueEntityInterface } from '../../models/venue.entity';
import { Venue } from '../../models/venue.model';

export class VenueMapper {
  /**
   * Map fields of a single MongoDB VenueEntity and create a new Venue (Domain) with it.
   *
   * @param venueEntity VenueEntity
   * @return Venue
   */
  public static toVenue(venueEntity: VenueEntityInterface): Venue {
    return new Venue(
      venueEntity.id,
      venueEntity.name,
      venueEntity.latitude,
      venueEntity.longitude,
    );
  }

  /**
   * Build a Venue[] with VenueEntity[] returned by MongoDB request.
   *
   * @param venuesEntity VenueEntity[]
   * @return Venue[]
   */
  public static toVenues(venuesEntity: VenueEntityInterface[]): Venue[] {
    const venues = new Array<Venue>();

    venuesEntity.forEach((venueEntity) => {
      const venue = this.toVenue(venueEntity);
      venues.push(venue);
    });

    return venues;
  }
}
