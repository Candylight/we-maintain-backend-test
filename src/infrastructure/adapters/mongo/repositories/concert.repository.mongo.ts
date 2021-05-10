import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Concert } from '../../../../domain/models/concert.model';
import { ConcertEntity } from '../entities/concert.entity';
import { Model } from 'mongoose';
import { ConcertRepository } from '../../../../domain/ports/repositories/concert.repository';
import { BandRepository } from '../../../../domain/ports/repositories/band.repository';
import { VenueRepository } from '../../../../domain/ports/repositories/venue.repository';
import { ConcertMapper } from '../../../../domain/services/response-mappers/concert.mapper';

/**
 * Mongo repository to request from mongo the Concert domain model.
 *
 * @class ConcertRepositoryMongo
 * @implements ConcertRepository
 */
@Injectable()
export class ConcertRepositoryMongo implements ConcertRepository {
  constructor(
    @InjectModel('Concert') private readonly concertModel: Model<ConcertEntity>,
    @Inject('BandRepository') private bandRepository: BandRepository,
    @Inject('VenueRepository') private venueRepository: VenueRepository,
  ) {}

  /**
   * Fetch all concerts within MongoDB.
   *
   * @return Promise<Concert[]>
   */
  async findAll(): Promise<Concert[]> {
    const concerts = await this.concertModel.find();

    return ConcertMapper.toConcerts(concerts);
  }

  /**
   * Fetch concerts by Bands Ids.
   *
   * @param bandIds number | number[]
   * @return Promise<Concert[]>
   */
  async findByBandIds(bandIds: number | number[]): Promise<Concert[]> {
    const concerts = await this.concertModel.where('bandId', bandIds);

    return ConcertMapper.toConcerts(concerts);
  }

  /**
   * Fetch concerts by Venues Ids.
   *
   * @param venueIds number | number[]
   * @return Promise<Concert[]>
   */
  async findByVenueIds(venueIds: number | number[]): Promise<Concert[]> {
    const concerts = await this.concertModel
      .where('venueId', venueIds)
      .sort({ date: -1 });

    return ConcertMapper.toConcerts(concerts);
  }
}
