import { Component, Input } from '@angular/core';
import {RightPageComponent} from "../app/right-page/right-page.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ColourChangeApp';
  
  private childcomp:RightPageComponent;

  constructor(){
    this.childcomp= new RightPageComponent();
    
  }
  changeColour(even) {
    console.log("input colour : ", even.colourCode);
    var etty={"colour":even.colourCode};
    this.childcomp.changeColour(etty);
  }
}
