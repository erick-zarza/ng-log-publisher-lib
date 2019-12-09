import { Injectable, Inject } from '@angular/core';

import { LogPublisherService } from './services/log-publisher.service';
import { LogLevel } from './models/log-level.enum';
import { LogEntry } from './classes/log-entry';
import { LogPublisher } from './classes/log-publisher';
import { LogPublisherConfig } from './models/log-publisher-config';

@Injectable(
  {
  providedIn: 'root'
})
export class NgLogPublisherLibService {

  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;

  publishers: LogPublisher[];

  constructor(private publishersService: LogPublisherService) {
    // Set publishers
    this.publishers = this.publishersService.publishers;
    //this.initClient();
  }

  /**
   * Initializes the client
   */
  loggerLib: LogPublisherConfig[];
  private client;

  // private initClient() {
  //   this.loggerLib = this.config;
  //   this.client = this.loggerLib;
  // }

//   public getEntries(contentType: string): Observable<any> {
   
//     //TODO: Obserbable
//     console.log("log desde la libreria ahua"); 
//     return of(this.client);

    
// }



  // log(msg: any) {
  //   console.log(new Date() + ": "
  //     + JSON.stringify(msg));
  // }

  debug(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: string, ...optionalParams: any[]) {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  private writeToLog(msg: string, level: LogLevel, params: any[]) {
    if (this.shouldLog(level)) {
      let entry: LogEntry = new LogEntry();
      entry.message = msg;
      entry.level = level;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;
      // alert(entry.buildLogString());
      // console.log('%c' + entry.buildLogString(), 'background: #222; color: #bada55;');
      for (let logger of this.publishers) {
        
        logger.log(entry).subscribe(response => 
          console.log(response)
          );
      }
    }
  }

  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if (
      (level >= this.level && level !== LogLevel.Off) ||
      this.level === LogLevel.All
    ) {
      ret = true;
    }
    return ret;
  }

  
}

