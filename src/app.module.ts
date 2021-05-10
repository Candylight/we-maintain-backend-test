import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import InfrastructureModule from './infrastructure/infrastructure.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/weMaintain'),
    InfrastructureModule,
  ],
  controllers: [],
})
export class AppModule {}
