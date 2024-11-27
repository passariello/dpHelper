# I am dpHelper

![dpHelper](https://raw.githubusercontent.com/passariello/dphelper/HEAD/assets/logos/logo.svg)

**Manager | DevTools** by [Dario Passariello](https://dario.passariello.ca) (c)

[![dphelper](https://snyk.io/advisor/npm-package/dphelper/badge.svg)](https://snyk.io/advisor/npm-package/dphelper)
[![Socket Badge](https://socket.dev/api/badge/npm/package/dphelper/latest)](https://socket.dev/npm/package/dphelper/overview/latest)
<!-- [![Package Quality](https://packagequality.com/shield/dphelper.svg)](https://packagequality.com/#?package=dphelper) -->

[![version](https://img.shields.io/npm/v/dphelper.svg)](https://npmjs.org/package/dphelper)
[![downloads](https://img.shields.io/npm/dm/dphelper.svg)](https://npmjs.org/package/dphelper)

<!--
![npms.io](https://img.shields.io/npms-io/maintenance-score/dphelper)
![npms.io](https://img.shields.io/npms-io/quality-score/dphelper)
![npms.io](https://img.shields.io/npms-io/popularity-score/dphelper)
![npms.io](https://img.shields.io/npms-io/final-score/dphelper)
-->

![TypeScript](https://img.shields.io/badge/TypeScript-006b98?logo=TypeScript&logoColor=white)
![dpHelper](https://img.shields.io/badge/dpHelper-npm-green?logo=dpHelper&logoColor=white)

![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)


## About 🔥

dpHelper is a precise and complete collection of 190+ tools ready to use in all web/SaaS applications.
State and Store Management are now easy and global. You can store data globally using state, for example: **state.myData = "hello world"**, and access it everywhere in your application, including Ajax or React apps, without the need for extra files or Redux setup.

### example in react

```javascript
import React, { useEffect, useState } from 'react';
import 'dphelper';

function App() {
  // Store a value in the state
  state.test = 'Hello, World!';

  // Use the stored value in a React component
  useEffect(() => {
    console.log("you can recall from all pages: " + state.test); // Output: "Hello, World!"
  }, []);

  return (
    <div>
      <h1>{state.test}</h1>
    </div>
  );
}

export default App;
```

## Live demo

[https://a51.dev/tests/](https://a51.dev/tests/)

You can see an HTML version where dpHelper and LayerPro work together seamlessly.
dpHelper is compatible with a variety of frontend libraries, including:
* HTML
* React
* Vue
* And any other frontend library

## What you need to know about "no-refresh/reload" 🧐

### dpHelper Compatibility and AJAX Technology

dpHelper is primarily designed to work with websites, applications, and portals that use **AJAX/XMLHttpRequest technology**, such as:

1. PWA (Progressive Web Apps)
2. SPA (Single-Page Applications)
3. Angular
4. React
5. jQuery
6. ...

### What does this mean?

Modern browsers and applications use a **"NO REFRESH" behavior**, where only the affected parts of the page are re-rendered, rather than reloading the entire page. This can cause **data loss** when refreshing or reloading the page.

### Recommendation

If you want to use dpHelper as a state/store manager, consider using the **store function** in a non-AJAX engine. If you need help or more information, feel free to contact me.

#### You can find more information and related topics at the following links:

[Ajax_(programming)](https://en.wikipedia.org/wiki/Ajax_(programming))

[SPA (Single-page application)](https://developer.mozilla.org/en-US/docs/Glossary/SPA)

[XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

<!--You are not a tech guy, nerd or geek? ... no worries. Fix it... go to hiring one 🤭-->

## The Best Way To Use State and Store 💥

### Using the "state" Function

You can use the state function to store and reuse data throughout your application. Similar to other state managers, you can store information in JSON format and access it easily in various contexts, including:

1. React
2. useEffect
3. dispatch

For example, you can store a value like this: state.test = 'I am ready' and then retrieve it later using state.test.

_example:_

You can use browser's devtools console and type " **state.test = 'I am ready'** ".
Every time you want to use '**test**' values you need just recall **state.test**.

```javascript
// Set a state
state.test = "I am ready";

// Get the state
state.test

// List all states
state
```

## Observer 😎

If you want to run a function everytime a state change... you can use:

```javascript
/**
* Observer is a non cumulative listener,
* is trigged from customEvent / dispatch from state
* @parameters
* [ name, function ]
*/
observer("test", ()=> alert( "Test Changes to: " + state.test ) )
```

You can use it everywere. Works like "useState" in react but with more flexibility ( use one observer each state! )

### example:

```javascript
import 'dphelper';

// Use the observer to log the changing state value
observer('count', () => {
  console.log("state changed: ", state.count);
});

// Store a value in the state that changes every 5 seconds
setInterval(() => {
  state.count = Date.now();
}, 5000);

```

## State vs Store 🎅

### Persistent Storage with dpHelper

When using dpHelper for permanent storage, you should use the store function instead of state. This is because store utilizes localStorage, which stores data persistently across sessions.

#### Important Security Note

1. **Use store for persistent storage:** If you want to store data permanently, use store to ensure it is saved in localStorage.

2. **Remove data when necessary:** To maintain security, remove stored data when it is no longer needed, such as during logout.

3. **Clear all stored data:** Use store.clearAll() to securely remove all stored data from your application.

```javascript
// Set a store:
store.set("test", { test:"test" })

// Get a store:
store.get("test") // Output: { test:"test" }

// Remove a store:
store.delete("test") // Output: "ok"

// Remove all:
store.clearAll() // Output: "ok"

```

### example in react

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
  useEffect(() => {
    console.log( store.get("user") ); // Output: { name: "John Doe", age: 30 }
    $("#name").text( store.get("user").name )
  }, []);

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

---

## Install

```
npm i dphelper --save-dev
```

or update:

```
npm i dphelper@latest --save-dev
```
---
Use it in the in main root file (and only there):

```javascript
import "dphelper";
```

or

```javascript
require("dphelper");
```

## Install for ejs or other type of projects (like html)

note: you don't need to use npm install in this case or you get an error

```html
<script src="https://unpkg.com/dphelper@latest/index.js"></script>
```

## How to use it

type 'dphelper' in the console of your browser to have a look about all available & tools that you can use!

You can call these from everywhere without import (just one time in main / root page)

---

## Browser Extension (Chrome/Edge) ♥️
![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

![dpHelper Banner](https://raw.githubusercontent.com/passariello/dphelper/HEAD/assets/images/banner.png)

![dpHelper Banner](https://raw.githubusercontent.com/passariello/dphelper/HEAD/assets/images/screenshot.png)

Chrome: [Download from Google Web Store](https://chrome.google.com/webstore/detail/dphelper-manager-dev-tool/oppppldaoknfddeikfloonnialijngbk)

Edge: [Download from Microsoft Addons](https://microsoftedge.microsoft.com/addons/detail/dphelper-manager-dev-to/kphabkbdpaljlfagldhojilhfammepnk)

PS: **dphelper** is compatible with all Chronium base browser like **Brave** too!

## dpHelper Browser Extension

The dpHelper browser extension allows you to manage your application's dpHelper NPM. Key features include:

1. Simplified API operations: Easily manage and manipulate data with dpHelper's collection of scripts.

2. Real-time monitoring: Track memory usage and localStorage to optimize your application's performance.

3. Stay up-to-date: Receive updates and tips to improve your daily workflow.

4. Easy installation: Simply import 'dphelper' in your project index to get started.

5. Global accessibility: All scripts are available globally and can be accessed from anywhere in your application.

## Check

Socket.dev: [https://socket.dev/npm/package/dphelper](https://socket.dev/npm/package/dphelper)

Snyk.io: [https://security.snyk.io/package/npm/dphelper](https://security.snyk.io/package/npm/dphelper)

---

Dario Passariello, All rights reserved - Copyright (c) 2019 - 2024
