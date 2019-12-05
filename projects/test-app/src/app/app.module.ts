import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //TODO, remember to document or figure out how to do it.

import { AppComponent } from './app.component';
import { NgLogPublisherLibModule, NgLogPublisherLibService } from 'ng-log-publisher-lib'
import { environment } from '../environments/environment';


//const contentfulConfig: ContentfulConfig = environment.contentfulConfig;

@NgModule({
  declarations: [
    AppComponent/*,
    NgLogPublisherLibComponent*/
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
