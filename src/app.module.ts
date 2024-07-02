import { Module } from '@nestjs/common';
import { LinksController } from './controller/link.controller';
import { LinksService } from './services/link.service';


@Module({
  controllers: [LinksController],
  providers: [
    {
      provide: 'ILinksService',
      useClass: LinksService,
    },
  ],
})
export class AppModule {}
