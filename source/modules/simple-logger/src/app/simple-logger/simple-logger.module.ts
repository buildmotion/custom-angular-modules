import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLoggerConfig } from './simple-logger.config';

@NgModule({
  exports: [

  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SimpleLoggerModule {

  /**
   * A static method to provide configuration to the [SimpleLoggerModule].
   * @param config Use the [SimpleLoggerConfig] to provide configuration
   * information to the module.
   */
  static forRoot(config: SimpleLoggerConfig) {
    return {
      ngModule: SimpleLoggerModule,
      providers: [{provide: SimpleLoggerConfig, useValue: config}]
    };
  }
 }
