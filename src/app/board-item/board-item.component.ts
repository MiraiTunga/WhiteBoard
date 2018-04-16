import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  
    public positionX: number  = 50;
    public positionY: number  = 50;

    public SetPostion(x:number,y:number){

       this.positionX = x;
       this.positionY = y;
    }
   // md = 0;

  /*  mouseDown(event) {
        //  console.log(event.buttons);
        //console.log(event);
        this.md = event.buttons;
        if (this.md === 1) {
            console.log(event);
            this.positionX = event.clientX;
            this.positionY = event.clientY;
        }


    }*/
  ngOnInit() {
  }

}
