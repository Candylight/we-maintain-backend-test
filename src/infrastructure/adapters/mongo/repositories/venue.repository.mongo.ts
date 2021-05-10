import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Venue } from '../../../../domain/models/venue.model';
import { VenueEntity } from '../entities/venue.entity';
import { Model } from 'mongoose';
import { VenueRepository } from '../../../../domain/ports/repositories/venue.repository';
import { VenueMapper } from '../../../../domain/services/response-mappers/venue.mapper';
import { FindVenuesByLocationRequestInterface } from '../../../../domain/models/find-venues-by-location.request';

/**
 * Mongo repository to request from mongo the Venue domain model.
 *
 * @class VenueRepositoryMongo
 * @implements VenueRepository
 */
@Injectable()
export class VenueRepositoryMongo implements VenueRepository {
  constructor(
    @InjectModel('Venue') private readonly venueModel: Model<VenueEntity>,
  ) {}

  /**
   * Fetch all venues within MongoDB.
   *
   * @return Promise<Venue[]>
   */
  async findAll(): Promise<Venue[]> {
    const venues = await this.venueModel.find();

    return VenueMapper.toVenues(venues);
  }

  /**
   * Fetch all venues by Ids within MongoDB.
   *
   * @return Promise<Venue[]>
   */
  async findByIds(venueIds: number | number[]): Promise<Venue[]> {
    const venues = await this.venueModel.where('id', venueIds);

    return VenueMapper.toVenues(venues);
  }

  /**
   * Fetch all venues by location coordinates and within a radius within MongoDB.
   *
   * @param { longitude: float, latitude: float, radius: integer }
   * @return Promise<Venue[]>
   */
  async findByLocation({
    longitude,
    latitude,
    radius,
  }: FindVenuesByLocationRequestInterface): Promise<Venue[]> {
    // We update the collection with the new geolocation field to activate geolocation handling.
    // Note that it updates only entries without the field location.
    await this.venueModel.updateMany({}, [
      {
        $set: {
          location: { type: 'Point', coordinates: ['$longitude', '$latitude'] },
        },
      },
    ]);

    // Search by the radius regarding the longitude and latitude corresponding of one or many entries.
    const venues = await this.venueModel.find({
      location: {
        $geoWithin: { $centerSphere: [[longitude, latitude], radius / 3963.2] },
      },
    });

    return VenueMapper.toVenues(venues);
  }
}
