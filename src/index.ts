((function () {
  if (typeof window === "undefined") {
    return;
  }
  var loggingEnabled = (typeof sessionStorage !== "undefined") && sessionStorage.getItem("loggingEnabled") === "true";
  (<any>window).Logger = {
    enable: function () {
      (typeof sessionStorage !== "undefined") && sessionStorage.setItem("loggingEnabled", "true");
      loggingEnabled = true;
    },
    disable: function () {
      (typeof sessionStorage !== "undefined") && sessionStorage.removeItem("loggingEnabled");
      loggingEnabled = false;
    },
    isEnabled: function () {
      return loggingEnabled;
    }
  };
})());

export const Logger = {
  log: function (args?) {
    if (typeof window === "undefined" || (<any>window).Logger.isEnabled()) {
      console.log.apply(console, arguments);
    }
  },
  info: function (args?) {
    if (typeof window === "undefined" || (<any>window).Logger.isEnabled()) {
      console.info.apply(console, arguments);
    }
  },
  warn: function (args?) {
    if (typeof window === "undefined" || (<any>window).Logger.isEnabled()) {
      console.warn.apply(console, arguments);
    }
  },
  debug: function (args?) {
    if (typeof window === "undefined" || (<any>window).Logger.isEnabled()) {
      console.debug.apply(console, arguments);
    }
  }
};
