import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FishServiceService } from '../../service/fish-service.service';
import { Level } from '../../../../core/models/Level';
import {Fish} from "../../../../core/models/Fish";

@Component({
  selector: 'app-fish-add-edit',
  templateUrl: './fish-add-edit.component.html',
  styleUrls: ['./fish-add-edit.component.css']
})
export class FishAddEditComponent implements OnInit {
  public fishForm!: FormGroup;

  constructor(private fb: FormBuilder, private fishService: FishServiceService) { }

  ngOnInit(): void {
    this.fishForm = this.fb.group({
      name: this.fb.control(''),
      averageWeight: this.fb.control(''),
    });
  }

  create(): void {
    let fish: Fish = this.fishForm.value;
    this.fishService.create(fish).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
