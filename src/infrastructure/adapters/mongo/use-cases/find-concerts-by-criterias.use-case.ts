import { FindConcertsByCriteria } from '../../../../domain/use-cases/find-concerts-by-criteria';
import { Injectable, Inject } from '@nestjs/common';
import { ConcertRepository } from '../../../../domain/ports/repositories/concert.repository';
import { BandRepository } from '../../../../domain/ports/repositories/band.repository';
import { VenueRepository } from '../../../../domain/ports/repositories/venue.repository';

/**
 * We need to have this to pass the repositories adapters (here MongoDB) to our use case.
 *
 * @class FindConcertsByCriteriasMongoUseCase
 * @extends FindConcertsByCriteria
 */
@Injectable()
export class FindConcertsByCriteriasMongoUseCase extends FindConcertsByCriteria {
  constructor(
    @Inject('BandRepository') protected bandRepository: BandRepository,
    @Inject('VenueRepository') protected venueRepository: VenueRepository,
    @Inject('ConcertRepository') protected concertRepository: ConcertRepository,
  ) {
    super(bandRepository, venueRepository, concertRepository);
  }
}
