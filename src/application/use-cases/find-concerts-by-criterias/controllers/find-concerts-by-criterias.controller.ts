import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Query,
  Res,
} from '@nestjs/common';
import { FindConcertsByCriteria } from '../../../../domain/use-cases/find-concerts-by-criteria';
import { FindConcertsByCriteriasRequest } from '../dtos/find-concerts-by-criterias.request.dto';
import { FindConcertsByCriteriasRequestPipeTransform } from '../pipes/find-concerts-by-criterias.request.pipe.transform';

@Controller('concerts')
export default class FindConcertsByCriteriasController {
  constructor(
    @Inject('FindConcertsByCriteria')
    private findConcertsByCriteria: FindConcertsByCriteria,
  ) {}

  /**
   * Endpoint REST for handling our use case.
   * Before being handled by the service, parameters need to be transformed and validated (see FindConcertsByCriteriasRequestPipeTransform class).
   *
   * @param params FindConcertsByCriteriasRequest
   * @param request Res()
   */
  @Get()
  public async getConcerts(
    @Query(FindConcertsByCriteriasRequestPipeTransform)
    params: FindConcertsByCriteriasRequest,
    @Res() request,
  ): Promise<any> {
    const concerts = await this.findConcertsByCriteria.findConcertsByCriterias(
      params,
    );
    return request.status(HttpStatus.OK).json(concerts);
  }
}
