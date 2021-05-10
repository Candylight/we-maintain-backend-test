/**
 * Act as an abstraction for Concert Model.
 *
 * @interface ConcertEntityInterface
 */
export interface ConcertEntityInterface {
  readonly id: number;
  readonly bandId: number;
  readonly venueId: number;
  readonly date: number;
}
