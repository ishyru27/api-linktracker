
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ILinksService, Link } from './links.services.interface';
import { LinkStatsDto } from '../dtos/link-stats.dto';

@Injectable()
export class LinksService implements ILinksService {
  private links: Link[] = [];

  createLink(originalUrl: string): Link {
    const id = uuidv4();
    const maskedUrl = `${id.slice(0, 6)}`;
    const newLink: Link = {
      id,
      originalUrl,
      maskedUrl,
      hits: 0,
      valid: true,
    };
    this.links.push(newLink);
    return newLink;
  }

  private findLink(maskedUrl: string): Link | undefined {
    return this.links.find(link => link.maskedUrl === maskedUrl);
  }

  private validateLink(link: Link | undefined): void {
    if (!link || !link.valid) {
      throw new NotFoundException('Link not found');
    }
  }

  getLink(maskedUrl: string): Link {
    const link = this.findLink(maskedUrl);
    this.validateLink(link);
    return link;
  }

  incrementHit(maskedUrl: string): void {
    const link = this.getLink(maskedUrl);
    link.hits += 1;
  }

  getStats(maskedUrl: string): LinkStatsDto {
    const link = this.getLink(maskedUrl);
    return { hits: link.hits };
  }

  invalidateLink(maskedUrl: string): void {
    const link = this.getLink(maskedUrl);
    link.valid = false;
  }
}
