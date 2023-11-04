import { MarvelContentItems } from './marvel-content-items';
import { MarvelThumbnail } from './marvel-thumbnail';
import { MarvelUrl } from './marvel-url';

export interface MarvelHero {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  thumbnail: MarvelThumbnail;
  comics: MarvelContentItems;
  series: MarvelContentItems;
  stories: MarvelContentItems;
  events: MarvelContentItems;
  urls: MarvelUrl[];
}
