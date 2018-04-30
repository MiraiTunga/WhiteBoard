import { Component, OnInit } from '@angular/core';
import {BoardItemComponent} from "../board-item/board-item.component";

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent extends BoardItemComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
