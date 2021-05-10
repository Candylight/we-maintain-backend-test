import { Module } from '@nestjs/common';
import DomainModule from '../domain/domain.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BandSchema } from '../infrastructure/adapters/mongo/schemas/band.schema';
import { BandRepositoryMongo } from '../infrastructure/adapters/mongo/repositories/band.repository.mongo';
import { VenueRepositoryMongo } from '../infrastructure/adapters/mongo/repositories/venue.repository.mongo';
import { VenueSchema } from '../infrastructure/adapters/mongo/schemas/venue.schema';
import { ConcertSchema } from '../infrastructure/adapters/mongo/schemas/concert.schema';
import { ConcertRepositoryMongo } from '../infrastructure/adapters/mongo/repositories/concert.repository.mongo';
import FindConcertsByCriteriasController from './use-cases/find-concerts-by-criterias/controllers/find-concerts-by-criterias.controller';
import { FindConcertsByCriteria } from '../domain/use-cases/find-concerts-by-criteria';

@Module({
  imports: [
    DomainModule,
    MongooseModule.forFeature([
      {
        name: 'Band',
        schema: BandSchema,
      },
      {
        name: 'Venue',
        schema: VenueSchema,
      },
      {
        name: 'Concert',
        schema: ConcertSchema,
      },
    ]),
  ],
  providers: [
    FindConcertsByCriteria,
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
  ],
  exports: [FindConcertsByCriteria],
  controllers: [FindConcertsByCriteriasController],
})
export default class ApplicationModule {}
