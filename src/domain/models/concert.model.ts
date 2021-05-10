import { ConcertEntityInterface } from './concert.entity';

/**
 * Immutable domain class.
 *
 * @class Concert
 * @implements ConcertEntityInterface
 */
export class Concert implements ConcertEntityInterface {
  readonly id?: number;

  readonly bandId: number;

  readonly venueId: number;

  readonly date: number;

  constructor(id: number, bandId: number, venueId: number, date: number) {
    this.id = id;
    this.bandId = bandId;
    this.venueId = venueId;
    this.date = date;
  }
}
