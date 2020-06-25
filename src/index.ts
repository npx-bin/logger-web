((function () {
  var loggingEnabled = false;
  (<any>window).Logger = {
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

export const Logger = {
  log: function (args?) {
    if ((<any>window).Logger.isEnabled()) {
      console.log.apply(console, arguments);
    }
  },
  info: function (args?) {
    if ((<any>window).Logger.isEnabled()) {
      console.info.apply(console, arguments);
    }
  },
  warn: function (args?) {
    if ((<any>window).Logger.isEnabled()) {
      console.warn.apply(console, arguments);
    }
  },
  debug: function (args?) {
    if ((<any>window).Logger.isEnabled()) {
      console.debug.apply(console, arguments);
    }
  }
};
