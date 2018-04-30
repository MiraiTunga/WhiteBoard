import { Component, HostBinding,OnInit } from '@angular/core';
import {AddToBoardService} from "../add-to-board.service";

import {BoardItemComponent} from "../board-item/board-item.component";
import {BoxComponent} from "../box/box.component";
import {ArrowComponent} from "../arrow/arrow.component";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    @HostBinding('class') classes = "side";
  constructor(private addToBoardService: AddToBoardService) { }

    addStickyNote() {

   
     this.addToBoardService.appendComponentToBody(BoxComponent);
    
    }


    addArrow() {


        this.addToBoardService.appendComponentToBody(ArrowComponent);

    }
  ngOnInit() {
  }

}
