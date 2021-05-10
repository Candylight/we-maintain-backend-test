import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import DomainModule from './domain/domain.module';
import ApplicationModule from './application/application.module';
import InfrastructureModule from './infrastructure/infrastructure.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/weMaintain'),
    DomainModule,
    ApplicationModule,
    InfrastructureModule,
  ],
  controllers: [],
})
export class AppModule {}
