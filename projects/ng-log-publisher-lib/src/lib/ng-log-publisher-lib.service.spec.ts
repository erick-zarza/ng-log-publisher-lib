import { TestBed } from "@angular/core/testing";
import { NgLogPublisherLibService } from "./ng-log-publisher-lib.service";
import { NgLogPublisherLibModule } from "./ng-log-publisher-lib.module";

describe("NgLogPublisherLibService", () => {

  //Prepare tests
  let logPublisherConfig = [
    {
      loggerName: "console",
      loggerLocation: "",
      isActive: true
    },
    {
      loggerName: "localstorage",
      loggerLocation: "logging",
      isActive: true
    },
    {
      loggerName: "api",
      loggerLocation: "/api/log",
      isActive: false
    },
    {
      loggerName: "file",
      loggerLocation: "c:/weneedtoimplement.txt",
      isActive: false
    }
  ];

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [NgLogPublisherLibModule.forRoot(logPublisherConfig)],
      providers: [NgLogPublisherLibService]
    })
  );

  //Execute tests
  it("should print log message to console", function() {
    const service: NgLogPublisherLibService = TestBed.get(
      NgLogPublisherLibService
    );

    spyOn(window.console, "info");
    
    service.debug("blahh");
    // expect(window.console.info).toHaveBeenCalledWith(expect.length > 0,'blah');
    expect(window.console.info).toHaveBeenCalledWith(
      jasmine.stringMatching(/blahh/)
    );
  });

  it("should be created", () => {
    const service: NgLogPublisherLibService = TestBed.get(
      NgLogPublisherLibService
    );
    expect(service).toBeTruthy();
  });

  it("should have debug function", () => {
    const service: NgLogPublisherLibService = TestBed.get(
      NgLogPublisherLibService
    );
    expect(service.debug).toBeTruthy();
  });
});
