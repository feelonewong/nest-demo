import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RangeModule } from './range/range.module';

@Module({
  imports: [RangeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
