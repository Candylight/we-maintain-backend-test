import { ConcertEntityInterface } from '../../models/concert.entity';
import { Concert } from '../../models/concert.model';

export class ConcertMapper {
  /**
   * Map fields of a single ConcertEntity and create a new Concert (Domain) with it.
   *
   * @param concertEntity ConcertEntity
   * @return Concert
   */
  private static toConcert(concertEntity: ConcertEntityInterface): Concert {
    return new Concert(
      concertEntity.id,
      concertEntity.bandId,
      concertEntity.venueId,
      concertEntity.date,
    );
  }

  /**
   * Build a Concert[] with ConcertEntity[] returned by use-case action.
   *
   * @param concertsEntity ConcertEntity[]
   * @return Concert[]
   */
  public static toConcerts(
    concertsEntity: ConcertEntityInterface[],
  ): Concert[] {
    const concerts = new Array<Concert>();

    concertsEntity.forEach((concertEntity) => {
      const concert = this.toConcert(concertEntity);
      concerts.push(concert);
    });

    return concerts;
  }
}
