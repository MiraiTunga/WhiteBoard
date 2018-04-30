
import { Component, OnInit } from '@angular/core';
import * as interact from "interactjs";
import {BoardItemComponent} from "../board-item/board-item.component";


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent extends BoardItemComponent implements OnInit{
    
    constructor() {
        super();
        
    }

    ngOnInit() {
       
    }



}
