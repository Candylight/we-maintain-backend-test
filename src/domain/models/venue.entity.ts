/**
 * Act as an abstraction for Venue Model.
 *
 * @interface VenueEntityInterface
 */
export interface VenueEntityInterface {
  readonly id?: number;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
}
