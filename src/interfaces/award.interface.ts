export interface Award {
  title: string;
  subtitle: string;
  duty: Awards[];

}

export interface Awards {
  player:       string;
  description:  string;
  img:          string;
  background:   string;
  link:         string;
}