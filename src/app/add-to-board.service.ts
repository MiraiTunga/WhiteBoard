
import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ViewChild, ViewContainerRef,
} from '@angular/core';

import { BoxComponent } from './box/box.component'
import {BoardItemComponent} from "./board-item/board-item.component";

@Injectable()
export class AddToBoardService {

    @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
    constructor(
            private componentFactoryResolver: ComponentFactoryResolver,
            private appRef: ApplicationRef,
            private injector: Injector
    ){}

    appendComponentToBody(component: any) {
        
        
        // 1. Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        
       // componentRef.instance.SetPostion(0,0);

        
        // 2. Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // 3. Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // 4. Append DOM element to the body
        document.getElementsByClassName("main")[0].appendChild(domElem);

        // 5. Wait some time and remove it from the component tree and from the DOM
      /*  setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, 3000);*/
    }
    
    test(){
        alert("ss");
    }
}
