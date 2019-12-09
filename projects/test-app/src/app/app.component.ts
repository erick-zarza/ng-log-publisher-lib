import { Component } from '@angular/core';
import { NgLogPublisherLibService } from 'ng-log-publisher-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  public items = [];
  constructor(private ngLog: NgLogPublisherLibService) { }

  ngOnInit() {

    // TODO: Run all tests
    this.ngLog.debug("hola debug message");
    this.ngLog.error("hola error message");


  
  }
}
