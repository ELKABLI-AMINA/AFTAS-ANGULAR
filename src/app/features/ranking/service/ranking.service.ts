import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/service/api.service";
import {Observable} from "rxjs";
import {Member} from "../../../core/models/Member";
import {Ranking} from "../../../core/models/Ranking";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private apiService : ApiService) { }
  getAll(): Observable<Ranking[]>{
    return this.apiService.getAll<Ranking[]>('/api/ranking')
  }


  create(ranking: Ranking): Observable<Ranking> {
    return this.apiService.post<Ranking>('/api/ranking', ranking);
  }
}

