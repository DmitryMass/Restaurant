import { IDish } from './dish';

export interface IMenu {
  starters?: IDish[];
  breakfast?: IDish[];
  dinner?: IDish[];
  drinks?: IDish[];
  luch?: IDish[];
  all?: boolean;
}
