/**
 * Define our request criterias for concerts search.
 *
 * @interface FindConcertsByCriteriasRequestInterface
 */
export interface FindConcertsByCriteriasRequestInterface {
  latitude?: number;
  longitude?: number;
  radius?: number;
  bandIds?: number;
}
