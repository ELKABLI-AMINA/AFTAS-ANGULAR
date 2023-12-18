import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/service/api.service";
import {Observable} from "rxjs";
import {Level} from "../../../core/models/Level";
import {Competition} from "../../../core/models/Competition";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Competition[]> {
    return this.apiService.getAll<Competition[]>('/api/competitions');
  }


  create(competition: Competition): Observable<Competition> {
    return this.apiService.post<Competition>('/api/competitions', competition);
  }
  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/competitions/${id}`);
  }

}
