import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ApplicationModule from './application/application.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/weMaintain'),
    ApplicationModule,
  ],
  controllers: [],
})
export class AppModule {}
