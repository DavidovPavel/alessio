export interface ICollaboration {
  name: string;
  pars: string[];
}

export interface IExhibition {
  name: string;
  text: string[];
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
}
