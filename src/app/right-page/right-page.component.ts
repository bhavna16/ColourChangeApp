import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.scss']
})
export class RightPageComponent implements OnInit {

  @Input() colourCode;

  constructor() {}

  ngOnInit(): void {
    debugger
    console.log("input colour : ", this.colourCode);
    document.getElementById("right-div").style.backgroundColor = this.colourCode;
  }

}
