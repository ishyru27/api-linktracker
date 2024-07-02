export interface ILinksService {
  createLink(originalUrl: string): Link;
  getLink(maskedUrl: string): Link;
  incrementHit(maskedUrl: string): void;
  getStats(maskedUrl: string): { hits: number };
  invalidateLink(maskedUrl: string): void;
}

export interface Link {
  id: string;
  originalUrl: string;
  maskedUrl: string;
  hits: number;
  valid: boolean;
}
