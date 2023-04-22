import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsController } from './controller/patients/patients.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongodbModule } from './module/mongoose/mongodb.module';
import { PatientsService } from './service/patients/patients.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongodbModule,
  ],
  controllers: [AppController, PatientsController],
  providers: [AppService, PatientsService],
})
export class AppModule {}
