"use strict";
exports.__esModule = true;
exports.Logger = void 0;
((function () {
    if (typeof window === "undefined") {
        return;
    }
    var loggingEnabled = true;
    window.Logger = {
        enable: function () {
            sessionStorage.setItem("loggingEnabled", "true");
            loggingEnabled = true;
        },
        disable: function () {
            sessionStorage.removeItem("loggingEnabled");
            loggingEnabled = false;
        },
        isEnabled: function () {
            return loggingEnabled;
        }
    };
    if (sessionStorage.getItem("loggingEnabled") === "true") {
        loggingEnabled = true;
    }
})());
exports.Logger = {
    log: function (args) {
        if (typeof window === "undefined" || window.Logger.isEnabled()) {
            console.log.apply(console, arguments);
        }
    },
    info: function (args) {
        if (typeof window === "undefined" || window.Logger.isEnabled()) {
            console.info.apply(console, arguments);
        }
    },
    warn: function (args) {
        if (typeof window === "undefined" || window.Logger.isEnabled()) {
            console.warn.apply(console, arguments);
        }
    },
    debug: function (args) {
        if (typeof window === "undefined" || window.Logger.isEnabled()) {
            console.debug.apply(console, arguments);
        }
    }
};
