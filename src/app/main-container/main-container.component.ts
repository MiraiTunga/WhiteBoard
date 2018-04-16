import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

    @HostBinding('class') classes = "main";
    
  constructor() { }

  ngOnInit() {
  }

}
