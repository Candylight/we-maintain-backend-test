import { Document } from 'mongoose';
import { VenueEntityInterface } from '../../../../domain/models/venue.entity';

export interface VenueEntity extends Document, VenueEntityInterface {
  readonly id: number;
  readonly name: string;
  readonly latitude: number;
  readonly longitude: number;
}
