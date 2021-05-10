/**
 * Act as an abstraction for ConcertGateway Model.
 *
 * @interface ConcertGatewayEntityInterface
 */
export interface ConcertGatewayEntityInterface {
  readonly band: string;
  readonly location: string;
  readonly date: number;
  readonly latitude: number;
  readonly longitude: number;
}
