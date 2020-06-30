import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// data flows from a service to a component
// angular will automatically create a single 
// instance of each service for us.

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php',{
      params:{
        action:'query',
        format:'json',
        list:'search',
        utf8:'1',
        srsearch:term,
        origin:'*'
      }
    });
  }

}
