import { Document } from 'mongoose';
import { BandEntityInterface } from '../../../../domain/models/band.entity';

export interface BandEntity extends Document, BandEntityInterface {
  readonly id: number;
  readonly name: string;
}
