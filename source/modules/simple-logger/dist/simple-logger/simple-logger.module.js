import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLoggerConfig } from './simple-logger.config';
var SimpleLoggerModule = (function () {
    function SimpleLoggerModule() {
    }
    /**
     * A static method to provide configuration to the [SimpleLoggerModule].
     * @param config Use the [SimpleLoggerConfig] to provide configuration
     * information to the module.
     */
    /**
       * A static method to provide configuration to the [SimpleLoggerModule].
       * @param config Use the [SimpleLoggerConfig] to provide configuration
       * information to the module.
       */
    SimpleLoggerModule.forRoot = /**
       * A static method to provide configuration to the [SimpleLoggerModule].
       * @param config Use the [SimpleLoggerConfig] to provide configuration
       * information to the module.
       */
    function (config) {
        return {
            ngModule: SimpleLoggerModule,
            providers: [{ provide: SimpleLoggerConfig, useValue: config }]
        };
    };
    SimpleLoggerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [],
                    imports: [
                        CommonModule
                    ],
                    declarations: []
                },] },
    ];
    /** @nocollapse */
    SimpleLoggerModule.ctorParameters = function () { return []; };
    return SimpleLoggerModule;
}());
export { SimpleLoggerModule };
//# sourceMappingURL=simple-logger.module.js.map