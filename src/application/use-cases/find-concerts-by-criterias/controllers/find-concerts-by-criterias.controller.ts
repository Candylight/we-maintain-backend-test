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

/**
 * Controller for handling concert request.
 *
 * @class FindConcertsByCriteriasController
 */
@Controller('concerts')
export default class FindConcertsByCriteriasController {
  /**
   * All the logic is handled by our use case so we need to inject it in the controller to call it inside.
   * We inject the domain use case so it can be easily swap in NestJS DI if we decide to go for another database.
   *
   * @constructor of FindConcertsByCriteriasController
   * @param findConcertsByCriteria FindConcertsByCriteria
   */
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
