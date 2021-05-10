import { Document } from 'mongoose';
import { ConcertEntityInterface } from '../../../../domain/models/concert.entity';

export interface ConcertEntity extends Document, ConcertEntityInterface {
  readonly id: number;
  readonly bandId: number;
  readonly venueId: number;
  readonly date: number;
}
