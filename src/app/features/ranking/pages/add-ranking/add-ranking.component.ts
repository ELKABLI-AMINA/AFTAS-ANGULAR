import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RankingService} from "../../service/ranking.service";
import {Ranking} from "../../../../core/models/Ranking";

@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent {
  public rankingForm!:FormGroup;
  constructor( private fb: FormBuilder, private rankingService: RankingService) {
  }

  ngOnInit(): void {
    this.rankingForm=this.fb.group({
      member : this.fb.control(''),
      competition : this.fb.control(''),

    })
  }
  create(){
    let  ranking:Ranking=this.rankingForm.value;
    this.rankingService.create(ranking).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      }, error : err=>{
        console.log(err);
      }
    })
  }


}
