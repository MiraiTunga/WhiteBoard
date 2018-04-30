import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import {AddToBoardService} from "./add-to-board.service";
import { BoardItemComponent } from './board-item/board-item.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArrowComponent } from './arrow/arrow.component';
/*
const appRoutes: Routes = [
    { path: '/', component: MainContainerComponent },
    { path: 'settings',      component: SettingsComponent },
    { path: '**', component: PageNotFoundComponent }
];*/

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    SideBarComponent,
    MainContainerComponent,
    BoardItemComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ArrowComponent
  ],
 imports: [
     /*RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    ),*/
    BrowserModule
  ],
  providers: [AddToBoardService],
    entryComponents: [ BoxComponent,ArrowComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
