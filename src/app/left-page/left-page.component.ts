import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.scss']
})
export class LeftPageComponent implements OnInit {
  @Output() emitColour = new EventEmitter();
  hexaColourCode: any;

  constructor() { }

  ngOnInit(): void {
    debugger
    var etty = {
      "colourCode": "#000000"
    }
    this.emitColour.emit(etty);
  }

  changeColour() {
    debugger
    var etty = {
      "colourCode": "#" + this.hexaColourCode
    }
    this.emitColour.emit(etty);
  }

}
