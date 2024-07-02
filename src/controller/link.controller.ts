import { Controller, Post, Body, Get, Param, Res, Put, Inject } from '@nestjs/common';
import { ILinksService } from '../services/links.services.interface';
import { Response } from 'express';
import { CreateLinkDto } from '../dtos/create-link.dto';
import { LinkStatsDto } from '../dtos/link-stats.dto';

@Controller('links')
export class LinksController {
  constructor(@Inject('ILinksService') private readonly linksService: ILinksService) {}

  @Post()
  createLink(@Body() createLinkDto: CreateLinkDto) {
    const newLink = this.linksService.createLink(createLinkDto.url);
    return { maskedUrl: `http://localhost:8080/l/${newLink.maskedUrl}` };
  }

  @Get('l/:maskedUrl')
  redirectLink(@Param('maskedUrl') maskedUrl: string, @Res() res: Response) {
    try {
      this.linksService.incrementHit(maskedUrl);
      const link = this.linksService.getLink(maskedUrl);
      return res.redirect(link.originalUrl);
    } catch (error) {
      return res.status(404).send('Link not found');
    }
  }

  @Get(':maskedUrl/stats')
  getStats(@Param('maskedUrl') maskedUrl: string): LinkStatsDto {
    return this.linksService.getStats(maskedUrl);
  }

  @Put('l/:maskedUrl/invalidate')
  invalidateLink(@Param('maskedUrl') maskedUrl: string) {
    this.linksService.invalidateLink(maskedUrl);
    return { message: 'Link invalidated' };
  }
}
