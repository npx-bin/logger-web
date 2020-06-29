/**
 * logger-web: A logging utility for the web!
 */
/**
 * ## Package: logger-web
 */
export declare const Logger: {
    /**
     * ### Displays a 'log' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    log: (...args: any[]) => void;
    /**
     * ### Displays an 'info' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    info: (...args: any[]) => void;
    /**
     * ### Displays a 'warning' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    warn: (...args: any[]) => void;
    /**
     * ### Displays a 'debug' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    debug: (...args: any[]) => void;
    /**
     * ### Enables the Logger.
     */
    enable: () => void;
    /**
     * ### Disables the Logger
     */
    disable: () => void;
    /**
     * ### Returns a Boolean value: Logger is enabled(true) or disabled(false).
     */
    isEnabled: () => boolean;
    /**
     * ### Returns a String value: Logger is enabled("true") or disabled("false").
     */
    value: () => string;
};
