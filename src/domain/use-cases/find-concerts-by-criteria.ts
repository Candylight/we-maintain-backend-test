import { FindConcertsByCriteriasRequestInterface } from '../models/find-concerts-by-criterias.request';
import { ConcertGateway } from '../models/concert-gateway.model';
import { FindConcertsByCriteriasResponseMapper } from '../services/response-mappers/find-concerts-by-criterias.response.mapper';
import { BandRepository } from '../ports/repositories/band.repository';
import { VenueRepository } from '../ports/repositories/venue.repository';
import { ConcertRepository } from '../ports/repositories/concert.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindConcertsByCriteria {
  // Maybe Inject with a classic method.
  constructor(
    @Inject('BandRepository') private bandRepository: BandRepository,
    @Inject('VenueRepository') private venueRepository: VenueRepository,
    @Inject('ConcertRepository') private concertRepository: ConcertRepository,
  ) {}

  /**
   * Search for all the datas corresponding to the criterias of the request and aggregate the result response.
   *
   * @param bandIds
   * @param longitude
   * @param latitude
   * @param radius
   */
  async findConcertsByCriterias({
    bandIds,
    longitude,
    latitude,
    radius,
  }: FindConcertsByCriteriasRequestInterface): Promise<ConcertGateway[]> {
    let concertsFoundByBandIds = [];
    let concertsFoundByVenueIds = [];
    let bands = [];
    let venues = [];

    // Search Bands[] from the provided bandIds and search Concerts[] corresponding to theses specifics Bands.
    if (bandIds) {
      bands = await this.bandRepository.findByIds(bandIds);
      concertsFoundByBandIds = await this.concertRepository.findByBandIds(
        bandIds,
      );
    }

    // Search Venues[] from the provided location parameters and search Concerts[] corresponding to theses specifics Venues.
    if (longitude && latitude && radius) {
      venues = await this.venueRepository.findByLocation({
        longitude,
        latitude,
        radius,
      });
      const venueIds = venues.map(({ id }) => id);
      concertsFoundByVenueIds = await this.concertRepository.findByVenueIds(
        venueIds,
      );
    }

    // Aggregate results from both request.
    const concerts = [...concertsFoundByBandIds, ...concertsFoundByVenueIds];

    // If we don't have bands corresponding to the request we need to find bands informations for the remaining fetched concerts.
    if (!concertsFoundByBandIds.length) {
      const bandIdsOfConcertsFound = concerts.map(({ bandId }) => bandId);
      bands = await this.bandRepository.findByIds(bandIdsOfConcertsFound);
    }

    // If we don't have venues corresponding to the request we need to find venues informations for the remaining fetched concerts.
    if (!concertsFoundByVenueIds.length) {
      const venueIdsOfConcertsFound = concerts.map(({ venueId }) => venueId);
      venues = await this.venueRepository.findByIds(venueIdsOfConcertsFound);
    }

    // Aggregate all the datas to make an according response
    return FindConcertsByCriteriasResponseMapper.toConcertsGateway(
      concerts,
      bands,
      venues,
    );
  }
}
