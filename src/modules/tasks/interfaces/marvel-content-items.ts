import { MarvelItem } from './marvel-item';

export interface MarvelContentItems {
  available: number;
  collectionURI: string;
  returned: number;
  items: MarvelItem[];
}
