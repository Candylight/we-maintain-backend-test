import { Band } from '../../models/band.model';

/**
 * Interface being implemented on others repositories to request domain object.
 *
 * @interface BandRepository
 */
export interface BandRepository {
  /**
   * Fetch all the bands
   *
   * @return Band[]
   */
  findAll(): Promise<Band[]>;

  /**
   * Fetch bands by Ids
   *
   * @param bandIds number | number[]
   * @return Band[]
   */
  findByIds(bandIds: number | number[]): Promise<Band[]>;
}
