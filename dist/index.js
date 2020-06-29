"use strict";
/**
 * logger-web: A logging utility for the web!
 */
exports.__esModule = true;
exports.Logger = void 0;
/*Define Global Context*/
var glb = (typeof window !== "undefined") ? window : {};
/*Define & Load Logging Module for Browser Environment.*/
((function () {
    if (glb.Logger) {
        return;
    }
    var key = "loggingEnabled";
    var loggingEnabled = (typeof sessionStorage !== "undefined") && sessionStorage.getItem(key) === "true";
    glb.Logger = {
        log: function () {
            if (glb.Logger.isEnabled()) {
                console.log.apply(console, arguments);
            }
        },
        info: function () {
            if (glb.Logger.isEnabled()) {
                console.info.apply(console, arguments);
            }
        },
        warn: function () {
            if (glb.Logger.isEnabled()) {
                console.warn.apply(console, arguments);
            }
        },
        debug: function () {
            if (glb.Logger.isEnabled()) {
                console.debug.apply(console, arguments);
            }
        },
        enable: function () {
            (typeof sessionStorage !== "undefined") && sessionStorage.setItem(key, "true");
            loggingEnabled = true;
        },
        disable: function () {
            (typeof sessionStorage !== "undefined") && sessionStorage.setItem(key, "false");
            loggingEnabled = false;
        },
        isEnabled: function () {
            return loggingEnabled;
        },
        value: function () {
            if (typeof sessionStorage !== "undefined") {
                return sessionStorage.getItem(key);
            }
            else {
                return glb.Logger.isEnabled() ? "true" : "false";
            }
        }
    };
})());
/*Define & Load Logger Module for Node Environment.*/
/**
 * ## Package: logger-web
 */
exports.Logger = {
    /**
     * ### Displays a 'log' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    log: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.log.apply(null, arguments);
    },
    /**
     * ### Displays an 'info' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    info: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.info.apply(null, arguments);
    },
    /**
     * ### Displays a 'warning' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    warn: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.warn.apply(null, arguments);
    },
    /**
     * ### Displays a 'debug' message.
     * #### @param args: Supports multiple arguments of type 'any'.
     */
    debug: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.debug.apply(null, arguments);
    },
    /**
     * ### Enables the Logger.
     */
    enable: function () {
        glb.Logger.enable();
    },
    /**
     * ### Disables the Logger
     */
    disable: function () {
        glb.Logger.disable();
    },
    /**
     * ### Returns a Boolean value: Logger is enabled(true) or disabled(false).
     */
    isEnabled: function () {
        return glb.Logger.isEnabled();
    },
    /**
     * ### Returns a String value: Logger is enabled("true") or disabled("false").
     */
    value: function () {
        return glb.Logger.value();
    }
};
