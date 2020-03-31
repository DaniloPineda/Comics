import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ComicModel } from '../models/comic';


@Injectable()
export class ComicService{

  private _baseUri = 'https://xkcd.com';
  constructor(private http: HttpClient) {     
  }

  getCurrent(): Observable<ComicModel> {
    var url = `${this._baseUri}/info.0.json`;
    var url2 = '/current';
    return this.http.get<ComicModel>(url2);
  }

  
  getById(id: string): Observable<ComicModel> {
    var url = `${this._baseUri}/${id}/info.0.json`;
    var url2 = `/${id}/id`;
    return this.http.get<ComicModel>(url2);    
  }


}
