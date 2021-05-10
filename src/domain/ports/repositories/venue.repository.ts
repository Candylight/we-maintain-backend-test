import { Venue } from '../../models/venue.model';
/**
 * Interface being implemented on others repositories to request domain object
 *
 * @interface VenueRepository
 */
export interface VenueRepository {
  /**
   * Fetch all the venues
   *
   * @return Venue[]
   */
  findAll(): Promise<Venue[]>;

  /**
   * Fetch venues by the location within a radius
   *
   * @param { longitude: float, latitude: float, radius: integer }
   * @return Venue[]
   */
  findByLocation({ longitude, latitude, radius }): Promise<Venue[]>;

  /**
   * Fetch venues by Ids
   *
   * @param venueIds number | number[]
   * @return Venue[]
   */
  findByIds(venueIds: number | number[]): Promise<Venue[]>;
}
