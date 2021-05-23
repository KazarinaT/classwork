import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartarrComponent } from './startarr/startarr.component';
import { MyimgComponent } from './myimg/myimg.component';

@NgModule({
  declarations: [
    AppComponent,
    StartarrComponent,
    MyimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
