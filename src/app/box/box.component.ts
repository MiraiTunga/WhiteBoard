import { Component, OnInit ,HostBinding} from '@angular/core';

import * as interact from "interactjs";
import {BoardItemComponent} from "../board-item/board-item.component"; [interact]


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent extends BoardItemComponent implements OnInit{

    @HostBinding('class') classes = "resize-drag";
    @HostBinding('style.transform') x = 'translateX('+this.positionX+')';
    @HostBinding('style.transform') y = 'translateY('+this.positionY+')';
    
    
    constructor() {
        super();
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
              //  target.style.width  = event.rect.width + 'px';
             //   target.style.height = event.rect.height + 'px';

                // translate when resizing from top or left edges
             //   x += event.deltaRect.left;
              //  y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
               // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
            });
    
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

    ngOnInit() {
       
    }



}
