import { Component } from '@angular/core';
import {Competition} from "../../../../core/models/Competition";
import {CompetitionService} from "../../service/competition.service";

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.css']
})
export class ListCompetitionComponent {
  competitions : Competition[] =[];
  constructor( private competitionService : CompetitionService) {
  }

  ngOnInit(): void {
    this.loadCompetition()
  }
  private loadCompetition(): void{
    this.competitionService.getAll().subscribe((competitions: any)=>{
      console.log("competitions =", competitions)
      this.competitions = competitions;
    });
  }
  deleteCompetition(id:number):void{
    if(confirm("Are you sur ?"))
      this.competitionService.delete(id).subscribe(()=>{
        console.log(`Level with ID ${id} deleted successfully.`);
        this.loadCompetition();
      });
  }


}
