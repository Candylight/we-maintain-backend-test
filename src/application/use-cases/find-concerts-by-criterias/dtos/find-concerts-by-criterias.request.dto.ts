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
  @ApiPropertyOptional()
  @IsNumber()
  @Max(90)
  @Min(-90)
  @IsOptional()
  latitude?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @Max(180)
  @Min(-180)
  @IsOptional()
  longitude?: number;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  radius?: number;

  @ApiPropertyOptional({ type: 'number', isArray: true })
  @IsNumber({}, { each: true })
  @IsOptional()
  bandIds?: number;
}
