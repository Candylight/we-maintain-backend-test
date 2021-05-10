import { Concert } from '../../models/concert.model';

/**
 * Interface being implemented on others repositories to request domain object.
 *
 * @interface ConcertRepository
 */
export interface ConcertRepository {
  /**
   * Fetch all concerts.
   *
   * @return Concert[]
   */
  findAll(): Promise<Concert[]>;

  /**
   * Fecth concerts by venues Ids.
   *
   * @param venueIds number | number[]
   * @return Concert[]
   */
  findByVenueIds(venueIds: number | number[]): Promise<Concert[]>;

  /**
   * Fetch concerts by bands ids.
   *
   * @param bandIds number | number[]
   * @return Concert[]
   */
  findByBandIds(bandIds: number | number[]): Promise<Concert[]>;
}
