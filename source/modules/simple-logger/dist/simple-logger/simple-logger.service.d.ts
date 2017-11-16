import { Severity } from './severity.enum';
import { SimpleLoggerConfig } from './simple-logger.config';
export declare class SimpleLoggerService {
    private config;
    private source;
    private severity;
    private message;
    private timestamp;
    private applicationName;
    /**
     * The constructor for the [SimpleLoggerService].
     * @param config Configuration information injected into the constructor.
     */
    constructor(config: SimpleLoggerConfig);
    /**
     * Use to create a log item in the application console.
     * @param source
     * @param severity
     * @param message
     */
    log(source: string, severity: Severity, message: string): void;
}
