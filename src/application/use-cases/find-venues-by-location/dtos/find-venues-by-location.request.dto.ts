import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional } from 'class-validator';
import { FindVenuesByLocationRequestInterface } from '../../../../domain/models/find-venues-by-location.request';

/**
 * Schema with the constraints for the request to be validated with.
 *
 * @class FindVenuesByLocationRequest
 */
export class FindVenuesByLocationRequest
  implements FindVenuesByLocationRequestInterface {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  longitude?: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  radius?: number;
}
