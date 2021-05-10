import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  PipeTransform,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

/**
 * Pipe for the transformation and validation of the parameters for the corresponding request.
 *
 * @class FindConcertsByCriteriasRequestPipeTransform
 */
export class FindConcertsByCriteriasRequestPipeTransform
  implements PipeTransform {
  /**
   * Transfom and validate the parameters provided by the request.
   *
   * @param parameters FindConcertsByCriteriasRequest
   * @param metatype ArgumentMetadata
   */
  async transform(parameters: any, { metatype }: ArgumentMetadata) {
    // new Object with the geoloc properties to validate if we missing some (we can't have only one of the property).
    const parameters_location = {
      latitude: parameters.latitude,
      longitude: parameters.longitude,
      radius: parameters.radius,
    };

    // We check if bandIds or the geoloc properties are filled (we can have both).
    if (
      Object.values(parameters_location).some((parameter) => !parameter) &&
      !parameters.bandIds
    ) {
      throw new HttpException(
        'You must filter by bandIds OR by latitude/longitude/radius',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (
      !metatype ||
      !FindConcertsByCriteriasRequestPipeTransform.toValidate(metatype)
    ) {
      return parameters;
    }

    // transform the parameters to the right format required by the schema FindConcertsByCriteriasRequest.
    parameters = this.transformParameters(parameters);

    const object = plainToClass(metatype, parameters);

    // validate parameters with the FindConcertsByCriteriasRequest schema.
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    return parameters;
  }

  /**
   * Transform all parameters received.
   * bandsIds => from a list of strings to a list of numbers
   * latitude => from a string to a float
   * longitude => from a string to a float
   * radius => from a string to a integer
   *
   * @param parameters
   * @private
   */
  transformParameters(parameters) {
    return {
      bandIds: this.formatBandIds(parameters.bandIds),
      latitude: FindConcertsByCriteriasRequestPipeTransform.transformStringToFloat(
        parameters.latitude,
      ),
      longitude: FindConcertsByCriteriasRequestPipeTransform.transformStringToFloat(
        parameters.longitude,
      ),
      radius: FindConcertsByCriteriasRequestPipeTransform.transformStringToInt(
        parameters.radius,
      ),
    };
  }

  /**
   * Transform an array of strings into an array of numbers (cast each to integer).
   *
   * @param bandIds number[] | undefined
   * @private
   */
  private formatBandIds(bandIds): number[] | undefined {
    if (!bandIds) {
      return undefined;
    }

    const formattedBandIds = Array.isArray(bandIds) ? bandIds : [bandIds];

    return formattedBandIds.map((formattedBandId) => {
      return FindConcertsByCriteriasRequestPipeTransform.transformStringToInt(
        formattedBandId,
      );
    });
  }

  /**
   * Check types to validate.
   *
   * @param metatype
   * @private
   * @return boolean
   */
  private static toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  /**
   * If a string is provided, cast it to integer.
   *
   * @param value string
   * @private
   * @throws BadRequestException
   * @return number
   */
  private static transformStringToInt(value: string): number {
    if (!value) {
      return undefined;
    }

    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Invalid value: ' + value);
    }
    return val;
  }

  /**
   * If a string is provided, cast it to float.
   *
   * @param value string
   * @private
   * @throws BadRequestException
   * @return number
   */
  private static transformStringToFloat(value: string): number | undefined {
    if (!value) {
      return undefined;
    }

    const val = parseFloat(value.replace(/,/g, '.'));
    if (isNaN(val)) {
      throw new BadRequestException('Invalid value: ' + value);
    }

    return val;
  }
}
