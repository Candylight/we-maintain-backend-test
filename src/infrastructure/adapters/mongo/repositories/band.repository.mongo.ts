import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Band } from '../../../../domain/models/band.model';
import { BandMapper } from '../../../../domain/services/response-mappers/band.mapper';
import { BandEntity } from '../entities/band.entity';
import { Model } from 'mongoose';
import { BandRepository } from '../../../../domain/ports/repositories/band.repository';

/**
 * Mongo repository to request from mongo the Band domain model.
 *
 * @class BandRepositoryMongo
 * @implements BandRepository
 */
@Injectable()
export class BandRepositoryMongo implements BandRepository {
  constructor(
    @InjectModel('Band') private readonly bandModel: Model<BandEntity>,
  ) {}

  /**
   * Fetch all bands within MongoDB
   *
   * @return Promise<Band[]>
   */
  async findAll(): Promise<Band[]> {
    const bands = await this.bandModel.find();

    return BandMapper.toBands(bands);
  }

  /**
   * Fetch bands by Ids within MongoDB
   *
   * @param bandIds  number | number[]
   * @return Promise<Band[]>
   */
  async findByIds(bandIds: number | number[]): Promise<Band[]> {
    const bands = await this.bandModel.where('id', bandIds);

    return BandMapper.toBands(bands);
  }
}
