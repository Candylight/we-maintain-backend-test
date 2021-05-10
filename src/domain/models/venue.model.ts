import { VenueEntityInterface } from './venue.entity';

/**
 * Immutable domain class.
 *
 * @class Venue
 * @implements VenueEntityInterface
 */
export class Venue implements VenueEntityInterface {
  readonly id?: number;

  readonly name: string;

  readonly latitude: number;

  readonly longitude: number;

  constructor(id: number, name: string, latitude: number, longitude: number) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
