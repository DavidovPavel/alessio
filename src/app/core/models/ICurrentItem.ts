import { ILinkParams } from './ILinkParams';
import { Product } from './product';


export interface ICurrentItem {
  prev: ILinkParams;
  next: ILinkParams;
  current: Product;
}
