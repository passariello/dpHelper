# dpHelper

![dpHelper](https://raw.githubusercontent.com/passariello/container/92b999bad3a5e68d6e6ec800c3974383dba16244/dphelper/assets/images/banner.svg)

**Manager | DevTools** by [Dario Passariello](https://dario.passariello.ca) (c)

[![version](https://img.shields.io/npm/v/dphelper.svg)](https://npmjs.org/package/dphelper)
[![dphelper](https://snyk.io/advisor/npm-package/dphelper/badge.svg)](https://snyk.io/advisor/npm-package/dphelper)
[![Socket Badge](https://socket.dev/api/badge/npm/package/dphelper)](https://socket.dev/npm/package/dphelper)
[![downloads](https://img.shields.io/npm/dm/dphelper.svg)](https://npmjs.org/package/dphelper)

![TypeScript](https://img.shields.io/badge/TypeScript-006b98?logo=TypeScript&logoColor=white)
![dphelper](https://img.shields.io/badge/dphelper-npm-green?logo=dphelper&logoColor=white)
![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

## About 🔥

dpHelper is a precise and complete collection of 190+ tools ready to use in all web/SaaS applications. State and Store Management are now easy and global, accessible everywhere in your application, including Ajax or React apps, without the need for extra files or Redux setup.

### Example in React

```javascript
import React, { useEffect } from 'react';
import 'dphelper';

  function App() {
    // Store a value in the state
    state.test = 'Hello, World!';

    // Use the stored value in a React component
    useEffect(() => {
      console.log("You can recall from all pages: " + state.test); // Output: "Hello, World!"
    }, []);

    return (
      <div>
        <h1>{state.test}</h1>
      </div>
    );
  }

export default App;
```

## Live Demo

[https://a51.dev/tests/](https://a51.dev/tests/)

You can see an HTML version where dpHelper and LayerPro work together seamlessly. dpHelper is compatible with a variety of frontend libraries, including:
* HTML
* React
* Vue
* And any other frontend library

## Documentation

You can see:
- [State](https://passariello.gitbook.io/dphelper-devtools/general/state)
- [Store](https://passariello.gitbook.io/dphelper-devtools/general/store)
- [Observer](https://passariello.gitbook.io/dphelper-devtools/general/observer)
- [List of functions](https://passariello.gitbook.io/dphelper-devtools/general/list)

You can see more tutorials, information, and examples about **dpHelper** [clicking here](https://passariello.gitbook.io/dphelper-devtools).

## What You Need to Know About "No-Refresh/Reload" 🧐

### dpHelper Compatibility and AJAX Technology

dpHelper is primarily designed to work with websites, SPA, SaaS applications, and portals that use **AJAX/XMLHttpRequest technology**, such as:

1. PWA (Progressive Web Apps)
2. SPA (Single-Page Applications)
3. SaaS
4. Microservice

and more...

It is also indicated to work with and for:

1. React
2. jQuery
3. Angular
4. Vue
5. Vanilla

and more...

### What Does This Mean?

Modern browsers and applications use a **"NO REFRESH" behavior**, where only the affected parts of the page are re-rendered, rather than reloading the entire page. This can cause **data loss** when refreshing or reloading the page.

#### You can find more information and related topics at the following links:

[Ajax_(programming)](https://en.wikipedia.org/wiki/Ajax_(programming))

[SPA (Single-page application)](https://developer.mozilla.org/en-US/docs/Glossary/SPA)

[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

### Recommendation

If you want to use dpHelper as a data manager, consider using the **store** function in a **non-AJAX engine**. If you need help or more information, feel free to contact me.

## The Best Way To Use State 💥

### Using the "state" Function

You can use the state function to store and reuse data throughout your application. Similar to other state managers, you can save state information in JSON format and access it easily in various contexts, including React useEffect and/or dispatch.

For example, you can store a value like this: _state.test = 'I am ready'_ and then retrieve it later using state.test.

_example:_

You can use the browser's devtools console and type " **state.test = 'I am ready'** ". Every time you want to use '**test**' values, you need just recall **state.test**.

```javascript
// Set a state
state.test = "I am ready";

// Get the state
state.test

// List all states
state.list // or just "state" to see the proxy

// Remove a state
state.remove("test")
```

### Observer 😎 for States

**Note**: _Observer works only with states. Stores are excluded at the moment._

🔥NEW🔥: Great, now you can use nested objects in observer. You need to declare "state." or "store." before selecting the object you want to monitor.

If you want to run a function every time a state changes, you can use:

```javascript
/**
* Observer is a non-cumulative listener,
* triggered from customEvent / dispatch from state
* @parameters
* [ state | store, function ]
*/
observer( "state.test", () => alert("Test Changes to: " + state.test) )
          |__________|  |___________________________________________|
          State: string                   Function

PS: you need to use the name of state | store as string
```

You can use it everywhere. Works like "useState" in React but with more flexibility (use one observer for each state!).

### Example:

```javascript
import 'dphelper';

// Use the observer to log the changing state value
observer(
  'state.count',
  () => console.log("State changed: ", state.count)
);

// Store a value in the state that changes every 5 seconds
setInterval(() => state.count = Date.now(), 5000);
```

#### Another Simple Example:

```javascript
import 'dphelper';

// Set a state
state.myData = 'Hello, world!';

// Retrieve the state
console.log(state.myData); // Output: Hello, world!

// Observe state changes
observer('myData', () => {
  console.log('myData has changed to:', state.myData);
});

// Change the state
state.myData = 'New value';
```

## The Best Way To Use Store 🫙

### Persistent Storage with dpHelper

When using dpHelper for permanent storage, you should use the **store**, which stores data persistently across sessions.

#### Important Security Note

1. **Use store for persistent storage:** If you want to store data permanently, use store to ensure it is saved in localStorage.

2. **Remove data when necessary:** To maintain security, remove stored data when it is no longer needed, such as during logout.

3. **Clear all stored data:** Use store.clearAll() to securely remove all stored data from your application.

```javascript
// Set a store:
store.set("test", { test: "test" })

// Get a store:
store.get("test") // Output: { test: "test" }

// Remove a store:
store.delete("test") // Output: "ok"

// Remove all stores:
store.clearAll() // Output: "ok"
```

### Example in React

```javascript
import React, { useEffect } from 'react';
import 'dphelper';

function App() {

  // Store a value in the store (persistent storage)
  store.set(
    'user',
    {
      name: 'John Doe',
      age: 30
    }
  );

  // Use the stored value in a React component
  useEffect(
    () => {
      console.log(store.get("user")); // Output: { name: "John Doe", age: 30 }
      $("#name").text(store.get("user").name)
    }, []
  );

  // Clear all stored data if necessary
  // store.clearAll();

  return (
    <div>
      <h1 id="name">...</h1>
    </div>
  );
}

export default App;
```

## Usage

Install dpHelper.

```shell
npm i dphelper --save-dev
```

or update:

```shell
npm i dphelper@latest --save-dev
```

Use it in the main root file (and only there):

```javascript
import "dphelper";
```

or

```javascript
require("dphelper");
```

## Install for EJS or Other Types of Projects (like HTML)

Note: You don't need to use npm install in this case, or you will get an error.

```html
<script src="https://unpkg.com/dphelper@latest/index.js"></script>
```

## Console It!

Type **dphelper** in the devtool console of your browser to have a look at all available tools that you can use! You can call these from everywhere without import (just one time in the main/root page).

## Browser Extension (Chrome/Edge) ♥️

![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

![dphelper Banner](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/banner.png)

![dphelper Banner](https://raw.githubusercontent.com/passariello/container/refs/heads/main/dphelper/assets/images/screenshot.png)

Chrome: [Download from Google Web Store](https://chrome.google.com/webstore/detail/dphelper-manager-dev-tool/oppppldaoknfddeikfloonnialijngbk)

Edge: [Download from Microsoft Addons](https://microsoftedge.microsoft.com/addons/detail/dphelper-manager-dev-to/kphabkbdpaljlfagldhojilhfammepnk)

PS: **dpHelper** is compatible with all Chromium-based browsers like **Brave** too!

## dpHelper Browser Extension

The dpHelper browser extension allows you to manage your application's dpHelper NPM. Key features include:

1. Simplified API operations: Easily manage and manipulate data with dpHelper's collection of scripts.
2. Real-time monitoring: Track memory usage and localStorage to optimize your application's performance.
3. Stay up-to-date: Receive updates and tips to improve your daily workflow.
4. Easy installation: Simply import 'dphelper' in your project index to get started.
5. Global accessibility: All scripts are available globally and can be accessed from anywhere in your application.

## Check

[Socket.dev](https://socket.dev/npm/package/dphelper)

[Snyk.io](https://security.snyk.io/package/npm/dphelper)

## License

[MIT - https://en.wikipedia.org/wiki/MIT_License](https://en.wikipedia.org/wiki/MIT_License)

- [LICENCE](https://passariello.gitbook.io/dphelper-devtools/documents/license)
- [CODE OF CONDUCT](https://passariello.gitbook.io/dphelper-devtools/documents/code_of_conduct)
- [SECURITY](https://passariello.gitbook.io/dphelper-devtools/documents/security)
- [CONTRIBUTING](https://passariello.gitbook.io/dphelper-devtools/documents/contributing)

---

Dario Passariello - dariopassariello@gmail.com, All rights reserved - Copyright (c) 2019 - 2024
