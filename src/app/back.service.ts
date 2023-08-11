import { Injectable } from '@angular/core';
import { person } from 'src/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackService {


  constructor(private http : HttpClient) { }

  getPerson():Observable<person[]>{
    return this.http.get<person[]>('assets/data.json')
  }

  createPerson(data:person):Observable<person[]>{
    return this.http.post<person[]>('assets/data.json',data)
  }

}
