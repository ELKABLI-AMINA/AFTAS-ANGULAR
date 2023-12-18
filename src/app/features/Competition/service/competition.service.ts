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




  create(competition: Competition): Observable<Competition> {
    return this.apiService.post<Competition>('/api/competitions', competition);
  }


}
