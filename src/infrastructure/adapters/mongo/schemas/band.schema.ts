import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/**
 * Mongo Schema for Band.
 */
@Schema()
export class Band {
  @Prop()
  id: number;

  @Prop()
  name: string;
}

export const BandSchema = SchemaFactory.createForClass(Band);
