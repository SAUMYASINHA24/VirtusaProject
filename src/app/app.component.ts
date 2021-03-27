import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num : number = 0 
  title = 'first-assignment';
  dynamicRows: any[] = [];
  dynamicInputRows: any[] = [];
  currDiv: string = '';
      
  
  addNew(event) {
    this.dynamicRows.push(event.target.value);
  }
  addInput(){
    this.dynamicInputRows.push(1);
  }
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
}
