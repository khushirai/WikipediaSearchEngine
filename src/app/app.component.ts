import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // wikipedia will added as private property automatically to the instance of the App component
  // wikipedia will be of type instance of wikipedia service
  constructor(private wikipedia:WikipediaService) {}
   
  onTerm(term:string){
    // response received from wikipedia search engine
    this.wikipedia.search(term).subscribe((response)=>{
      console.log(response); 
    })
  }
}


