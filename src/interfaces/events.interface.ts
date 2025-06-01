export interface Article {
  title?:       string;
  subTitle:     string;
  hasLogo:      boolean;
  information:  Articles[];
}

export interface Events {
  hasLogo:      boolean;
  information:  Event;
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

interface Event {
  date:       string,
  category?:  string,
  title:      string,
  paragraph?: string,
  logo?:      string,
  img:        string,
  link:       string,
}