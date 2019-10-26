import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory Browser';
  public searchData: string;

  sendSearchByType(searchData){
    console.log("appcomp")
    console.log(searchData);
    this.searchData = searchData;
  }
}
