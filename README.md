# logger-web
## A logging utility for the web!

**Installation:**

```
npm i logger-web
```

**Usage:**

```
import { Logger } from 'logger-web';
(or)
const Logger = require("logger-web").Logger;
(or)
const { Logger } = require("logger-web");
```
```
Logger.info("some info text . . .");
Logger.log("some log text . . .");
Logger.warn("some warning text . . .");
Logger.debug("some debug text . . .");
```

**Turn on/off the logging in browser:**
In the browser's console, type the following:
```
Logger.enable(); // For enabling the logging
Logger.disable(); // For disabling the logging
Logger.isEnabled(); // For checking if the logging is enabled
```

### License: MIT ( https://mit-license.kcak11.com )
