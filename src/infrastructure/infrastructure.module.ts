import { Band } from '../domain/models/band.model';
import { BandSchema } from './adapters/mongo/schemas/band.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Venue } from '../domain/models/venue.model';
import { VenueSchema } from './adapters/mongo/schemas/venue.schema';
import { ConcertSchema } from './adapters/mongo/schemas/concert.schema';
import { Concert } from '../domain/models/concert.model';
import { BandRepositoryMongo } from './adapters/mongo/repositories/band.repository.mongo';
import { VenueRepositoryMongo } from './adapters/mongo/repositories/venue.repository.mongo';
import { ConcertRepositoryMongo } from './adapters/mongo/repositories/concert.repository.mongo';
import { FindConcertsByCriteriasMongoUseCase } from './adapters/mongo/use-cases/find-concerts-by-criterias.use-case';
import { FindConcertsByCriteria } from '../domain/use-cases/find-concerts-by-criteria';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Band.name, schema: BandSchema },
      { name: Venue.name, schema: VenueSchema },
      { name: Concert.name, schema: ConcertSchema },
    ]),
  ],
  providers: [
    FindConcertsByCriteriasMongoUseCase,
    {
      provide: 'BandRepository',
      useClass: BandRepositoryMongo,
    },
    {
      provide: 'VenueRepository',
      useClass: VenueRepositoryMongo,
    },
    {
      provide: 'ConcertRepository',
      useClass: ConcertRepositoryMongo,
    },
    {
      provide: 'FindConcertsByCriteria',
      useClass: FindConcertsByCriteriasMongoUseCase,
    },
  ],
  exports: [FindConcertsByCriteria],
})
export default class InfrastructureModule {}
