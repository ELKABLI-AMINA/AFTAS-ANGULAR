import {Competition} from "./Competition";
import {Level} from "./Level";
import {Member} from "./Member";

export  interface Hunting{
  id: number;
  numberOfFish: number;
  competition: Competition;
  fish: Level;
  member: Member;
}
