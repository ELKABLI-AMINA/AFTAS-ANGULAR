import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/service/api.service";
import {Observable} from "rxjs";
import {Level} from "../../../core/models/Level";

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Level[]> {
    return this.apiService.getAll<Level[]>('/api/levels');
  }

  create(level: Level): Observable<Level> {
    return this.apiService.post<Level>('/api/levels', level);
  }


  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/level/${id}`);
  }
}
