import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { NgLogPublisherLibComponent } from './ng-log-publisher-lib.component';
import { ContentfulConfigService } from './classes/log-publisher-config';
import { NgLogPublisherLibService } from './ng-log-publisher-lib.service';
import { LogPublisherConfig } from './interfaces/log-publisher-config';


@NgModule({
  declarations: [/*NgLogPublisherLibComponent*/],
  imports: [
    HttpClientModule
  ],
  providers: [],
  exports: [/*NgLogPublisherLibComponent*/]
})
export class NgLogPublisherLibModule { 
  static forRoot(config: LogPublisherConfig[]): ModuleWithProviders {
    return {
      ngModule: NgLogPublisherLibModule,
      providers: [
        NgLogPublisherLibService,
        {
          provide: ContentfulConfigService,
          useValue: config
        }
      ]
    }
  }
 }