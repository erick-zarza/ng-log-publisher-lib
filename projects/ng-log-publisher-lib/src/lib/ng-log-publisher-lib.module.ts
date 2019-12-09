import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LogPublisherConfigService } from './services/log-publisher-config.service';
import { NgLogPublisherLibService } from './ng-log-publisher-lib.service';
import { LogPublisherConfig } from './models/log-publisher-config';



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
          provide: LogPublisherConfigService,
          useValue: config
        }
      ]
    }
  }
 }