/**
 * Immutable domain class.
 *
 * @class Band
 */
export class Band {
  readonly id?: number;

  readonly name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }
}
