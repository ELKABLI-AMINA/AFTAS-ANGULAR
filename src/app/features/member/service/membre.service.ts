import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../../../core/models/Member";
import {ApiService} from "../../../core/service/api.service";

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private apiService : ApiService) { }
   getAll(): Observable<Member[]>{
    return this.apiService.getAll<Member[]>('/api/members')
  }


  create(member: Member): Observable<Member> {
    return this.apiService.post<Member>('/api/members', member);
  }

  update(id: number, member: Member): Observable<Member> {
    return this.apiService.put<Member>('/api/members/{num}', member);
  }



  delete(num: number): Observable<void> {
    return this.apiService.delete<void>(`${'/api/members'}/${num}`);
  }
  SearchMember(keyword: string): Observable<Member[]> {
    return this.apiService.Search<Member[]>(`/api/members`, keyword);
  }


}
