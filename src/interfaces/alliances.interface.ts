export interface Ally {
  title: string;
  subtitle: string;
  alliances:  Alliances[];
}

export interface Alliances {
  img:          string;
  description:  string;
  link:         string;
}