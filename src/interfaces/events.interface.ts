export interface Article {
  title?:       string;
  subTitle:     string;
  hasLogo:      boolean;
  information:  Articles[];
}

interface Articles {
  date:       string,
  category?:  string,
  title:      string,
  paragraph?: string,
  logo?:      string,
  img:        string,
  link:       string,
}