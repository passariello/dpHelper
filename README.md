# I am dpHelper

```
dpHelper Devtools by Dario Passariello
```

![dpHelper](https://raw.githubusercontent.com/passariello/dphelper/HEAD/assets/logos/logo.svg)

Manager | DevTools by [Dario Passariello (c)](https://dario.passariello.ca)

<!-- ![git repository](https://img.shields.io/badge/git%20repository-updated-green.svg) -->
![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

---

![TypeScript](https://img.shields.io/badge/TypeScript-006b98?logo=TypeScript&logoColor=white)
![React-js](https://img.shields.io/badge/React-js-006b98?logo=React-js&logoColor=white)
![dpHelper](https://img.shields.io/badge/dpHelper-npm-green?logo=dpHelper&logoColor=white)
![layerpro](https://img.shields.io/badge/layerpro-npm-green?logo=layerpro&logoColor=white)
<!-- ![Node-js](https://img.shields.io/badge/Node-js-006b98?logo=Node-js&logoColor=white) -->
<!-- ![Express](https://img.shields.io/badge/Express-006b98?logo=Express&logoColor=white) -->
<!-- ![Api](https://img.shields.io/badge/Api-006b98?logo=Api&logoColor=white) -->

## About 🔥

dpHelper is a pricise and complete collection of functions ready to use in all web application. State and Store Management are now easy and global. Just for example **state.myData = "hello world"** and your string is ready everywhere in your Ajax or React app. It's more easy and intuitive of Redux.
You don't need to creare any extra files, dispatch or reducer.

Please, read the [LICENSE](/LICENSE.txt) agreement before to implementing in your application.

## Live demo

[https://a51.dev/tests/](https://a51.dev/tests/)

You can see an HTML version where dpHelper and LayerPro works.
You can use with html, react, vue or any other frontend / library.

## The Best Way To Use State and Store 💥

You can use "state" to store all what you want and reuse everywhere. Like other state manager you can store information in JSON format and you can use them in react, useEffect, dispatch in a very easy way.

_example:_

You can use devtools in your browser and type " **state.test = 'I am ready'** ".
Every time you want to use '**test**' you need just recall **state.test**.

```javascript
state.test = "I am ready";
```

recall

```javascript
state.test
```

To see all states just use

```javascript
state
```

## Observer 😎

If you want to run a funtion everytime a state change you can use:

```javascript
observer("test",()=>alert("Test Changes to: " + state.test))
```

You can use it everywere. Works like "useState" in react but with more flexibility

## State vs Store 🎅

**INFO**: if you want to use as permanent storage (localStorage) you need to use " **store.** " instead state.

---

## Install for react + webpack projects

```
npm i dphelper --save-dev
```

or update:

```
npm i dphelper@latest --save-dev
```

in the index (and only there):

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

type 'dphelper' in your dev console to have a look about all available tools that you can use globaly!

You can call these from everywhere without import (just one at index)

## Browser Extension (Chrome/Edge) ♥️

![dpHelper Banner](https://raw.githubusercontent.com/passariello/dphelper/HEAD/assets/images/banner.png)

![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

![dpHelper Banner](https://raw.githubusercontent.com/passariello/dphelper/HEAD/assets/images/screenshot.png)

Chrome: [Download from Google Web Store](https://chrome.google.com/webstore/detail/dphelper-manager-dev-tool/oppppldaoknfddeikfloonnialijngbk)
Edge: [Download from Microsoft Addons](https://microsoftedge.microsoft.com/addons/detail/dphelper-manager-dev-to/kphabkbdpaljlfagldhojilhfammepnk)

This extension allows you to manage your app's dpHelper NPM. Here you will find all the tools with description and methods of use. Designed to simplify API operations, data manipulation and retention. You will be able to monitor memory usage and localStorage. You will always be updated on updates and tricks for your daily work. The dpHelper tool is a collection of scripts to simplify, improve and speed up your work. Designed to be easy to install and use. Just use "import 'dphelper'" in your project index. All scripts work in global and are reachable everywhere.

---

copyright (c) 2019 - 2024 by Dario Passariello
