import { IStoreItem } from './store-item';

export interface IBaseProduct {
  id: number;
  position: number;
  project: number;
  category: number;
  collection?: number;
  size: number[];
  color?: number;
  title: string;
  artist: string;
  rendering?: string;
  authorship?: string;
  edition?: string;
  roma_code?: string;
  price?: number;
}

export interface IProduct {
  id: number;
  position: number;
  project: IStoreItem;
  size: IStoreItem[];
  category: number;
  collection?: number;
  color?: number;
  title: string;
  artist: string;
  rendering?: string;
  authorship?: string;
  edition?: string;
  roma_code?: string;
  price?: number;
}
