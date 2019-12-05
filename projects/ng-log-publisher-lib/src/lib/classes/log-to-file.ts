import { Observable, of } from 'rxjs';

import { LogPublisher } from './log-publisher';
import { LogEntry } from './log-entry';

export class LogToFile extends LogPublisher{

    constructor() {
      // Must call super() from derived classes
      super(new LogEntry());
      // Set location
      this.location = "logging";
    }
  
    // Append log entry to local storage
    log(entry: LogEntry): Observable<boolean> {
      let ret: boolean = false;
        
      try {
        //Log to Console
        console.log(entry.buildLogString());
        
        // Set return value
        ret = true;
      } catch (ex) {
        // Display error in console
        console.log(ex);
      }
        
      return of(ret);
    }
        
    // Clear all log entries from local storage
    clear(): Observable<boolean> {
      console.clear();
      return of(true);
    }
  }