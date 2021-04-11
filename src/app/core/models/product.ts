import { Size } from './size';

export interface Product {
  id: number;
  position: number;
  project: number;
  projectName?: string;
  size: Size[];
  category: number;
  collection?: number;
  color?: number;
  title: string;
  artist: string;
  rendering?: string;
  authorship?: string;
  edition?: string;
  roma_code: string;
  price: number;
}
