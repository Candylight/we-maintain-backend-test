/**
 * Immutable domain class.
 *
 * @class Concert
 */
export class Concert {
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
