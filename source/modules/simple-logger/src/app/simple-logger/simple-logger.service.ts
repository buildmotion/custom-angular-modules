import { Injectable } from '@angular/core';
import { Severity } from './severity.enum';

import { SimpleLoggerConfig } from './simple-logger.config';

@Injectable()
export class SimpleLoggerService {

  private source: string;
  private severity: Severity;
  private message: string;
  private timestamp: Date;
  private applicationName: string;

  /**
   * The constructor for the [SimpleLoggerService].
   * @param config Configuration information injected into the constructor.
   */
  constructor(
    private config: SimpleLoggerConfig // injected by ng; constructor injection
  ) {
    if (config) {
      this.applicationName = config.applicationName;
    }
  }

  /**
   * Use to create a log item in the application console.
   * @param source 
   * @param severity 
   * @param message 
   */
  log(source: string, severity: Severity, message: string) {
    this.source = source;
    this.severity = severity;
    this.message = message;
    this.timestamp = new Date();
    const msg = `${this.message}`;

    console.log(`${this.severity} from ${this.applicationName}.${this.source}: ${msg} (${this.timestamp})`);
  }
}
