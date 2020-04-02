import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ComicModel } from '../models/comic';


@Injectable()
export class ComicService{

  constructor(private http: HttpClient) {     
  }

  getCurrent(): Observable<ComicModel> {
    var url = '/comic/current';
    return this.http.get<ComicModel>(url);
  }

  
  getById(id: string): Observable<ComicModel> {    
    var url = `/comic/id/${id}/info.0.json`;       
    return this.http.get<ComicModel>(url); 
  }

}
