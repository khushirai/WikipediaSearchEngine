import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Observable} from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface WikipediaResponse{
  query:{
    search:{
      title:string;
      snippet:string;
      pageid:number;
    }[];
  };
}

new Observable<WikipediaResponse>();
 
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) { }

  // http.get returns an observable
  // http.get is a generic function
  search(term: string) {
    return this.http.get<WikipediaResponse>
    ('https://en.wikipedia.org/w/api.php',{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin:'*'
      }
    }).pipe(
      pluck('query','search')
    )
  }

}
