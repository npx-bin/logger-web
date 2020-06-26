/**
 * logger-web: A logging utility for the web!
 */
export declare const Logger: {
    log: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    enable: () => void;
    disable: () => void;
    isEnabled: () => boolean;
    value: () => string;
};
