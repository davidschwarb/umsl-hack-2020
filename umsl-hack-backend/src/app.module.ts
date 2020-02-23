import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingsController } from './buildings/buildings.controller';

@Module({
  imports: [],
  controllers: [AppController, BuildingsController],
  providers: [AppService],
})
export class AppModule {}
