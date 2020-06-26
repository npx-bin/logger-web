/**
 * logger-web: A logging utility for the web! 
 */

/*Define Global Context*/
var glb = (typeof window !== "undefined") ? window : {};

/*Define & Load Logging Module for Browser Environment.*/
((function () {
  var key = "loggingEnabled";
  var loggingEnabled = (typeof sessionStorage !== "undefined") && sessionStorage.getItem(key) === "true";
  (<any>glb).Logger = {
    log: function () {
      if ((<any>glb).Logger.isEnabled()) {
        console.log.apply(console, arguments);
      }
    },
    info: function () {
      if ((<any>glb).Logger.isEnabled()) {
        console.info.apply(console, arguments);
      }
    },
    warn: function () {
      if ((<any>glb).Logger.isEnabled()) {
        console.warn.apply(console, arguments);
      }
    },
    debug: function () {
      if ((<any>glb).Logger.isEnabled()) {
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
      } else {
        return (<any>glb).Logger.isEnabled() ? "true" : "false";
      }
    }
  };
})());

/*Define & Load Logger Module for Node Environment.*/
export const Logger = {
  log: function (...args: any[]) {
    (<any>glb).Logger.log.apply(null, arguments);
  },
  info: function (...args: any[]) {
    (<any>glb).Logger.info.apply(null, arguments);
  },
  warn: function (...args: any[]) {
    (<any>glb).Logger.warn.apply(null, arguments);
  },
  debug: function (...args: any[]) {
    (<any>glb).Logger.debug.apply(null, arguments);
  },
  enable: function () {
    (<any>glb).Logger.enable();
  },
  disable: function () {
    (<any>glb).Logger.disable();
  },
  isEnabled: function (): boolean {
    return (<any>glb).Logger.isEnabled();
  },
  value: function (): string {
    return (<any>glb).Logger.value();
  }
};
