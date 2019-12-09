import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgLogPublisherLibModule, NgLogPublisherLibService } from 'ng-log-publisher-lib'
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    ,
    NgLogPublisherLibModule.forRoot(environment.logPublisherConfig)
  ],
  providers: [NgLogPublisherLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
