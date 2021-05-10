import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/**
 * Mongo Schema for Concert.
 */
@Schema()
export class Concert {
  @Prop()
  bandId: number;

  @Prop()
  venueId: number;

  @Prop()
  date: number;
}

export const ConcertSchema = SchemaFactory.createForClass(Concert);
