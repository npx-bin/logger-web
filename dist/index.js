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
exports.Logger = {
    log: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.log.apply(null, arguments);
    },
    info: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.info.apply(null, arguments);
    },
    warn: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.warn.apply(null, arguments);
    },
    debug: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        glb.Logger.debug.apply(null, arguments);
    },
    enable: function () {
        glb.Logger.enable();
    },
    disable: function () {
        glb.Logger.disable();
    },
    isEnabled: function () {
        return glb.Logger.isEnabled();
    },
    value: function () {
        return glb.Logger.value();
    }
};
