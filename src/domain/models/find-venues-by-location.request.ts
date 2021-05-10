/**
 * Define our request criterias for venues search.
 *
 * @interface FindVenuesByLocationRequestInterface
 */
export interface FindVenuesByLocationRequestInterface {
  latitude?: number;
  longitude?: number;
  radius?: number;
}
