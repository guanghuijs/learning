export type RouteMap = {
  title: string;
  path: string;
  order?: number;
  children?: RouteMap[];
};
