import {Component, OnInit} from '@angular/core';
import {Member} from "../../../../core/models/Member";
import {MembreService} from "../../../member/service/membre.service";
import {Ranking} from "../../../../core/models/Ranking";
import {RankingService} from "../../service/ranking.service";

@Component({
  selector: 'app-list-ranking',
  templateUrl: './list-ranking.component.html',
  styleUrls: ['./list-ranking.component.css']
})
export class ListRankingComponent implements OnInit{
  public keyword : string="";
  ranking : Ranking[] =[];
  constructor( private rankingService : RankingService) {
  }

  ngOnInit(): void {
    this.loadRanking()
  }
  private loadRanking(): void{
    this.rankingService.getAll().subscribe((rankings: any)=>{
      console.log("rankings =", rankings)
      this.ranking = rankings;
    });
  }

}
