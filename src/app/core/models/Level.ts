import {Fish} from "./Fish";

export interface Level{
  id: number;
  code: number;
  description: string;
  points: number;
  fish:Fish;
}
