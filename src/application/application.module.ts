import { Module } from '@nestjs/common';

import FindConcertsByCriteriasController from './use-cases/find-concerts-by-criterias/controllers/find-concerts-by-criterias.controller';
import InfrastructureModule from '../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  controllers: [FindConcertsByCriteriasController],
})
export default class ApplicationModule {}
