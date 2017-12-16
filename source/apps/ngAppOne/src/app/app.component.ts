import { Component } from '@angular/core';

import { SimpleLoggerService, Severity } from 'custom-angular-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private componentName: string = 'AppComponent';

  constructor(
    private logger: SimpleLoggerService
  ) {

    this.logger.log(this.componentName, Severity.Information, `Running constructor for the ${this.componentName}.`);
  }
}
