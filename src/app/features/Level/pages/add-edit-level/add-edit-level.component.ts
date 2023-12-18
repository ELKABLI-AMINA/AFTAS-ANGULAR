import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {LevelService} from "../../service/level.service";
import {Level} from "../../../../core/models/Level";

@Component({
  selector: 'app-add-edit-level',
  templateUrl: './add-edit-level.component.html',
  styleUrls: ['./add-edit-level.component.css']
})
export class AddEditLevelComponent implements OnInit{
  public levelForm!:FormGroup;
  constructor( private fb: FormBuilder, private levelService: LevelService) {
  }

  ngOnInit(): void {
    this.levelForm=this.fb.group({
      code : this.fb.control(''),
      description : this.fb.control(''),
      points : this.fb.control(''),

    })
  }
  create(){
    let  level:Level=this.levelForm.value;
    this.levelService.create(level).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      }, error : err=>{
        console.log(err);
      }
    })
  }

}
