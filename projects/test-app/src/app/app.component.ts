import { Component } from '@angular/core';
import { NgLogPublisherLibService } from 'ng-log-publisher-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logger-tester';
  public items = [];
  constructor(private ngLog: NgLogPublisherLibService) { }

  ngOnInit() {
    this.ngLog.debug("hola debug message");
    this.ngLog.error("hola error message");
    //this.ngLog.getEntries("weeeey");

  
  }
}
