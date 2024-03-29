export type GetPropType<T, K extends keyof T> = T extends { [P in K]: infer R }
  ? R
  : T;

export type SysStore = {
  mode: 'light' | 'dark';
  primaryColor: string;
};
