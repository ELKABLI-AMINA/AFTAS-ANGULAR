import { Injectable } from '@angular/core';
import { ApiService } from "../../../core/service/api.service";
import { Observable } from "rxjs";
import {Fish} from "../../../core/models/Fish";

@Injectable({
  providedIn: 'root'
})
export class FishServiceService {
  constructor(private apiService: ApiService) { }

  getAll(): Observable<Fish[]> {
    return this.apiService.getAll<Fish[]>('/api/fish');
  }

  create(fish: Fish): Observable<Fish> {
    return this.apiService.post<Fish>('/api/fish', fish);
  }

  update(id: number, fish: Fish): Observable<Fish> {
    return this.apiService.put<Fish>(`/api/fish/${id}`, fish);
  }
  getFishByName(name: string): Observable<Fish> {
    return this.apiService.getFishByName<Fish>('/api/fish/name', name);
  }
  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/fish/${id}`);
  }
}
