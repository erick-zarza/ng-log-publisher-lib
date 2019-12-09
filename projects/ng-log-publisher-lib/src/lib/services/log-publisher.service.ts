import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { LogPublisherConfigService } from './log-publisher-config.service';
import { LogPublisherConfig } from '../models/log-publisher-config';
import { LogPublisher } from '../classes/log-publisher';

import { LogToLocalStorage } from '../classes/log-to-local-storage';
import { LogToConsole } from '../classes/log-to-console';
import { LogToApi } from '../classes/log-to-api';
import { LogToFile } from '../classes/log-to-file';


@Injectable({
  providedIn: 'root'
})
export class LogPublisherService {

  constructor(private http: HttpClient, @Inject(LogPublisherConfigService) private config) {
    console.error("this error test2: ", this.config);
    console.warn("this warn test2: ", this.config);
    console.debug("this debug test2: ", this.config);
    console.log("this log test2: ", this.config);
    // Build publishers arrays
    this.buildPublishers();
  }
  //logger: LogEntry;
  // Public properties
  publishers: LogPublisher[] = [];

  getLoggers(): Observable<LogPublisherConfig[]> {
    console.error("this error test1: ", this.config);
    console.warn("this warn test1: ", this.config);
    console.debug("this debug test1: ", this.config);
    console.log("this log test1: ", this.config);
    return of(this.config);
  }

 
        // ,
      // catchError(this.handleErrors)

  // Build publishers array
  buildPublishers(): void {
    let logPub: LogPublisher;

    this.getLoggers().subscribe(response => {
      for (let pub of response.filter(p => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case "console":
            logPub = new LogToConsole();
            break;
          case "localstorage":
            logPub = new LogToLocalStorage();
            break;
          case "api":
            logPub = new LogToApi(/*this.http*/);
            break;
          case "file":
              logPub = new LogToFile(/*this.http*/);
              break;            
        }
        // Set location of logging
        logPub.location = pub.loggerLocation;
        // Add publisher to array
        this.publishers.push(logPub);
      }
    });
  }
  // buildPublishers(): void {
  //   // Create instance of LogConsole Class
  //   this.publishers.push(new LogConsole());
  //   // Create instance of LogLocalStorage Class
  //   this.publishers.push(new LogLocalStorage());
  //   // Create instance of LogWebApi Class
  //   this.publishers.push(new LogWebApi(this.http));
  // }

  // private handleErrors(error: any): Observable<any> {
  //   let errors: string[] = [];
  //   let msg: string = "";

  //   msg = "Status: " + error.status;
  //   msg += " - Status Text: " + error.statusText;
  //   if (error.json()) {
  //     msg += " - Exception Message: " + error.json().exceptionMessage;
  //   }
  //   errors.push(msg);

  //   console.error("An error occurred", errors);

  //   return Observable.throw(errors);
  // }
}
