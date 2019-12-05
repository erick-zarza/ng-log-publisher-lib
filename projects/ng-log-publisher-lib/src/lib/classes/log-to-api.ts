import { Observable, of } from 'rxjs';

import { LogPublisher } from './log-publisher';
import { LogEntry } from './log-entry';

//TODO: Same as console for now until we implement, and commented below is sample code.
export class LogToApi extends LogPublisher{

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


//   export class LogWebApi extends LogPublisher {
//     constructor(private http: HttpClient) {
//       // Must call super() from derived classes
//       super(new LogEntry());
//       // Set location
//       this.location = "/api/log";
//     }
  
//     // Add log entry to back end data store
//     log(entry: LogEntry): Observable<boolean> {
  
//       //TODO: Implement DB Class
//       // const httpOptions = {
//       //     headers: new HttpHeaders({
//       //       'Content-Type':  'application/json'
//       //     //   ,
//       //     //   'Authorization': 'my-auth-token'
//       //     })
//       //   };
  
  
//       // return this.http.post(this.location, entry, httpOptions).pipe(
//       //   map(response => response), //response.json()
//       //   catchError(this.handleErrors)
//       // );
  
//       //ToDo:Remove once above return is iplemented
//       return of(true);
//     }
  
//     // Clear all log entries from local storage
//     clear(): Observable<boolean> {
//       // TODO: Call Web API to clear all values
//       return of(true);
//     }
  
//     private handleErrors(error: any): Observable<any> {
//       let errors: string[] = [];
//       let msg: string = "";
  
//       msg = "Status: " + error.status;
//       msg += " - Status Text: " + error.statusText;
//       if (error.json()) {
//         msg += " - Exception Message: " + error.json().exceptionMessage;
//       }
//       errors.push(msg);
  
//       console.error("An error occurred", errors);
  
//       return Observable.throw(errors);
//     }
//   }