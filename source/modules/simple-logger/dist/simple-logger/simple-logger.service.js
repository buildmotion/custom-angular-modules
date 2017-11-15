import { Injectable } from '@angular/core';
var SimpleLoggerService = (function () {
    function SimpleLoggerService() {
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
        console.log(this.severity + " from " + this.source + ": " + msg + " (" + this.timestamp + ")");
    };
    SimpleLoggerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SimpleLoggerService.ctorParameters = function () { return []; };
    return SimpleLoggerService;
}());
export { SimpleLoggerService };
//# sourceMappingURL=simple-logger.service.js.map