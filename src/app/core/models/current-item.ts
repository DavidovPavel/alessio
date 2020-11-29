import { IProduct } from './product';

export interface ILinkParams {
  project: number;
  category: number;
  color: number | 0;
  collection: number | 0;
  size: number[];
  id: number;
}

export interface ICurrentItem {
  prev: ILinkParams;
  next: ILinkParams;
  current: IProduct;
}
