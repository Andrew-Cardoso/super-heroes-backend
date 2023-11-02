import { Item } from "./item";

export interface ContentItems {
  available: number;
  collectionURI: string;
  returned: number;
  items: Item[];
}
