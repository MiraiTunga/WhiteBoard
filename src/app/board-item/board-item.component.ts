
import * as interact from "interactjs";
import { Component, OnInit ,HostBinding} from '@angular/core';

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


    @HostBinding('class') classes = "resize-drag";
    @HostBinding('style.transform') x = 'translateX('+this.positionX+')';
    @HostBinding('style.transform') y = 'translateY('+this.positionY+')';
    
   constructor(){

        interact('.resize-drag')
            .draggable({
                onmove: dragMoveListener,
                restrict: {
                    restriction: 'parent',
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                inertia: true,
                // call this function on every dragend event
                onend: function (event) {

                    this.positionX= Math.sqrt(Math.pow(event.pageX - event.x0, 2));
                    this.positionY= Math.pow(event.pageY - event.y0, 2) | 0;
                }
            })
            .resizable({
                // resize from all edges and corners
                edges: { left: true, right: true, bottom: true, top: true },
                // keep the edges inside the parent
                restrict: {
                    restriction: 'parent',
                    endOnly: true,
                }
            })
            .on('resizemove', function (event) {
                let target = event.target,
                    x = (parseFloat(target.getAttribute('data-x')) || 0),
                    y = (parseFloat(target.getAttribute('data-y')) || 0);

                // update the element's style
                target.style.width  = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';


                // translate when resizing from top or left edges
                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
                //  target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
            });

       interact('.anchor')
           .draggable({
               onstart: function (event) {
                   const element = event.target.parentElement;
                 
                   const rect = element.getBoundingClientRect();

                   // store the center as the element has css `transform-origin: center center`
                   element.dataset.centerX = rect.left + rect.width / 2;
                   element.dataset.centerY = rect.top + rect.height / 2;
                   // get the angle of the element when the drag starts
                   element.dataset.angle = getDragAngle(event);
               },
               onmove: function (event) {
                   var element = event.target.parentElement.parentElement;
                   var center = {
                       x: parseFloat(element.dataset.centerX) || 0,
                       y: parseFloat(element.dataset.centerY) || 0,
                   };
                   var angle = getDragAngle(event);

                   // update transform style on dragmove
                   element.style.transform += 'rotate(' + angle + 'rad' + ')';
               },
               onend: function (event) {
                   const element = event.target.parentElement.parentElement;

                   // save the angle on dragend
                   element.dataset.angle = getDragAngle(event);
               },
           })

         function getDragAngle(event) {
           var element = event.target.parentElement.parentElement;
           var startAngle = parseFloat(element.dataset.angle) || 0;
           var center = {
               x: parseFloat(element.dataset.centerX) || 0,
               y: parseFloat(element.dataset.centerY) || 0,
           };
           var angle = Math.atan2(center.y - event.clientY,
               center.x - event.clientX);

           return angle - startAngle;
       }

        function dragMoveListener (event) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
                target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
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
