import { Component, OnInit } from '@angular/core';
import { FishServiceService } from "../../service/fish-service.service";
import {Fish} from "../../../../core/models/Fish";

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {
  fishes: Fish[] = [];

  constructor(private fishService: FishServiceService) {}

  ngOnInit(): void {
    this.loadFishes();
  }

  private loadFishes(): void {
    this.fishService.getAll().subscribe(
      (fishes: any) => {
        console.log('fishes =', fishes);
        this.fishes = fishes.content;
      },
      error => {
        console.error('Erreur lors du chargement des poissons :', error);
      }
    );
  }


  deleteFish(id: number): void {
    if (confirm("Are you sure?")) {
      this.fishService.delete(id).subscribe(() => {
        console.log(`Fish with ID ${id} deleted successfully.`);
        this.loadFishes();
      });
    }
  }
}
