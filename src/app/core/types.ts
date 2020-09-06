export interface ICollaboration {
  name: string;
  text: string[];
  expand?: boolean;
}

export interface IExhibition {
  id: number;
  text: string[];
  expand?: boolean;
  margin?: string;
}

export interface IProject {
  name: string;
  title: string;
  quote: string;
  text: string[];
  expand?: boolean;
}

export interface IPublication {
  name: string;
  text: string[];
  expand?: boolean;
}
