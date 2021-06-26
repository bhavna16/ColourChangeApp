import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-page',
  templateUrl: './right-page.component.html',
  styleUrls: ['./right-page.component.scss']
})
export class RightPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  changeColour(even){
    console.log("input colour : ", even.colour);
    document.getElementById("right-div").style.backgroundColor = even.colour;
  }

}
