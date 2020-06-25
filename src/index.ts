((function () {
  if (typeof window === "undefined") {
    return;
  }
  var key = "loggingEnabled";
  var loggingEnabled = (typeof sessionStorage !== "undefined") && sessionStorage.getItem(key) === "true";
  (<any>window).Logger = {
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
        return "false";
      }
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
  },
  enable: function () {
    (typeof window !== "undefined") && (<any>window).Logger.enable();
  },
  disable: function () {
    (typeof window !== "undefined") && (<any>window).Logger.disable();
  },
  isEnabled: function (): boolean {
    return (typeof window !== "undefined") ? (<any>window).Logger.isEnabled() : false;
  },
  value: function (): string {
    return (typeof window !== "undefined") ? (<any>window).Logger.value() : "false";
  }
};
