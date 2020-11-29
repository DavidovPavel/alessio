export interface IStoreItem {
  readonly id: number;
  readonly title: string;
  readonly link?: string | any[];
  readonly size?: (number | { title: string; id: number })[];
  readonly goto?: string[];
  readonly isActive: boolean;
  readonly pos: number;
}
