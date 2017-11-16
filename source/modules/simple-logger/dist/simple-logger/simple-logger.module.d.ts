import { SimpleLoggerConfig } from './simple-logger.config';
export declare class SimpleLoggerModule {
    /**
     * A static method to provide configuration to the [SimpleLoggerModule].
     * @param config Use the [SimpleLoggerConfig] to provide configuration
     * information to the module.
     */
    static forRoot(config: SimpleLoggerConfig): {
        ngModule: typeof SimpleLoggerModule;
        providers: {
            provide: typeof SimpleLoggerConfig;
            useValue: SimpleLoggerConfig;
        }[];
    };
}
