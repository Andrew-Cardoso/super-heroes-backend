import { ContentItems } from "./content-items";
import { Thumbnail } from "./thumbnail";
import { Url } from "./url";

export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: ContentItems;
  series: ContentItems;
  stories: ContentItems;
  events: ContentItems;
  urls: Url[];
}
