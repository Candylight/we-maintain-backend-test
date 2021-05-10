import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { FindConcertsByCriteriasRequestInterface } from '../../../../domain/models/find-concerts-by-criterias.request';

/**
 * Schema with the constraints for the request to be validated with.
 *
 * @class FindConcertsByCriteriasRequest
 */
export class FindConcertsByCriteriasRequest
  implements FindConcertsByCriteriasRequestInterface {
  @ApiPropertyOptional({
    description: 'Latitude of your coordinates.',
    example: '38.9171386',
  })
  @IsNumber()
  @Max(90)
  @Min(-90)
  @IsOptional()
  latitude?: number;

  @ApiPropertyOptional({
    description: 'Longitude of your coordinates.',
    example: '-77.0276204',
  })
  @IsNumber()
  @Max(180)
  @Min(-180)
  @IsOptional()
  longitude?: number;

  @ApiPropertyOptional({
    description: 'Radius to search within (km).',
    example: '20',
  })
  @IsInt()
  @IsOptional()
  radius?: number;

  @ApiPropertyOptional({
    type: 'number',
    isArray: true,
    description: 'A list of BandIds.',
    example: '35,24',
  })
  @IsNumber({}, { each: true })
  @IsOptional()
  bandIds?: number;
}
