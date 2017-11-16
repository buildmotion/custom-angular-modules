import { Injectable } from '@angular/core';
import { SimpleLoggerConfig } from './simple-logger.config';
var SimpleLoggerService = (function () {
    /**
     * The constructor for the [SimpleLoggerService].
     * @param config Configuration information injected into the constructor.
     */
    function SimpleLoggerService(config // injected by ng; constructor injection
    ) {
        this.config = config; // injected by ng; constructor injection
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
    /**
       * Use to create a log item in the application console.
       * @param source
       * @param severity
       * @param message
       */
    SimpleLoggerService.prototype.log = /**
       * Use to create a log item in the application console.
       * @param source
       * @param severity
       * @param message
       */
    function (source, severity, message) {
        this.source = source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        var msg = "" + this.message;
        console.log(this.severity + " from " + this.applicationName + "." + this.source + ": " + msg + " (" + this.timestamp + ")");
    };
    SimpleLoggerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SimpleLoggerService.ctorParameters = function () { return [
        { type: SimpleLoggerConfig, },
    ]; };
    return SimpleLoggerService;
}());
export { SimpleLoggerService };
//# sourceMappingURL=simple-logger.service.js.map