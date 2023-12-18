import { Component } from '@angular/core';

import {Level} from "../../../../core/models/Level";
import {LevelService} from "../../service/level.service";

@Component({
  selector: 'app-list-level',
  templateUrl: './list-level.component.html',
  styleUrls: ['./list-level.component.css']
})
export class ListLevelComponent {
  levels : Level[] =[];
  constructor( private levelService : LevelService) {
  }

  ngOnInit(): void {
    this.loadLevel()
  }
  private loadLevel(): void{
    this.levelService.getAll().subscribe((levels: any)=>{
      console.log("levels =", levels)
      this.levels = levels.content;
    });
  }
  deleteLevel(id:number):void{
    if(confirm("Are you sur ?"))
      this.levelService.delete(id).subscribe(()=>{
        console.log(`Level with ID ${id} deleted successfully.`);
        this.loadLevel();
      });
  }

}
