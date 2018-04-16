import { Component } from '@angular/core';
import { BoxComponent} from './box/box.component';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {AddToBoardService} from "./add-to-board.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app'; 
}

