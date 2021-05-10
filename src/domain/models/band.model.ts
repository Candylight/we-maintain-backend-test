import { BandEntityInterface } from './band.entity';

/**
 * Immutable domain class.
 *
 * @class Band
 * @implements BandEntityInterface
 */
export class Band implements BandEntityInterface {
  readonly id?: number;

  readonly name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
