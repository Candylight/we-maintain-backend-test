/**
 * Immutable domain class.
 *
 * @class Venue
 */
export class Venue {
  readonly id?: number;

  readonly name: string;

  readonly latitude: number;

  readonly longitude: number;

  constructor(id: number, name: string, latitude: number, longitude: number) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getLatitude(): number {
    return this.latitude;
  }

  getLongitude(): number {
    return this.longitude;
  }
}
