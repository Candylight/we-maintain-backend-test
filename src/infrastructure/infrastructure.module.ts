import { Band } from '../domain/models/band.model';
import { BandSchema } from './adapters/mongo/schemas/band.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import ApplicationModule from '../application/application.module';
import { Venue } from '../domain/models/venue.model';
import { VenueSchema } from './adapters/mongo/schemas/venue.schema';
import { ConcertSchema } from './adapters/mongo/schemas/concert.schema';
import { Concert } from '../domain/models/concert.model';

@Module({
  imports: [
    ApplicationModule,
    MongooseModule.forFeature([
      { name: Band.name, schema: BandSchema },
      { name: Venue.name, schema: VenueSchema },
      { name: Concert.name, schema: ConcertSchema },
    ]),
  ],
})
export default class InfrastructureModule {}
