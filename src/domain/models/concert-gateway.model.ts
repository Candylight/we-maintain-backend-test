import { ConcertGatewayEntityInterface } from './concert-gateway.entity';

/**
 * We still need a model to relate to for the new response.
 * Immutable domain class.
 *
 * @class ConcertGateway
 * @implements ConcertGatewayEntityInterface
 */
export class ConcertGateway implements ConcertGatewayEntityInterface {
  readonly band: string;

  readonly location: string;

  readonly date: number;

  readonly latitude: number;

  readonly longitude: number;

  constructor(
    band: string,
    location: string,
    date: number,
    latitude: number,
    longitude: number,
  ) {
    this.band = band;
    this.location = location;
    this.date = date;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
