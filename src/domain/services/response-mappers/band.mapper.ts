import { Band } from '../../models/band.model';
import { BandEntityInterface } from '../../models/band.entity';

export class BandMapper {
  /**
   * Map fields of a single BandEntity and create a new Band (Domain) with it.
   *
   * @param bandEntity BandEntity
   * @return Band
   */
  private static toBand(bandEntity: BandEntityInterface): Band {
    return new Band(bandEntity.id, bandEntity.name);
  }

  /**
   * Build a Band[] with BandEntity[] returned by use-case action.
   *
   * @param bandsEntity BandEntity[]
   * @return Band[]
   */
  public static toBands(bandsEntity: BandEntityInterface[]): Band[] {
    const bands = new Array<Band>();

    bandsEntity.forEach((bandEntity) => {
      const band = this.toBand(bandEntity);
      bands.push(band);
    });

    return bands;
  }
}
