import { Severity } from './severity.enum';
export declare class SimpleLoggerService {
    private source;
    private severity;
    private message;
    private timestamp;
    constructor();
    /**
     * Use to create a log item in the application console.
     * @param source
     * @param severity
     * @param message
     */
    log(source: string, severity: Severity, message: string): void;
}
