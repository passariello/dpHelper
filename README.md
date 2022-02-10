# dpHelper

![dpHelper](/assets/logos/logo.svg )

Manager | DevTools by [Dario Passariello (c)](https://dario.passariello.ca)

![git repository](https://img.shields.io/badge/git%20repository-updated-green.svg)
![browser extension](https://img.shields.io/badge/browser%20extension-beta-orange.svg)

## about

You have a lot of tools for you that make your life easier and faster!
Please visit the github repository @ [dpHelper on Github](https://github.com/passariello/dpHelper)

## install

```js
npm i dphelper

or update:

npm i dphelper@latest

```

in the index (and only there):

```js
import "dphelper"

or

require("dphelper")
```

## check

type 'dphelper' in your console to have a look about all available tools that you can use globaly!

You can call these from everywhere without import (just one at index)

## DOWNLOAD THE BROWSER EXTENSION (SOON)

![dpHelper Banner](/assets/images/banner.png)

This extension allows you to manage your app's dpHelper NPM. Here you will find all the tools with description and methods of use. Designed to simplify API operations, data manipulation and retention. You will be able to monitor memory usage and localStorage. You will always be updated on updates and tricks for your daily work. The dpHelper tool is a collection of scripts to simplify, improve and speed up your work. Designed to be easy to install and use. Just use "import 'dphelper'" in your project index. All scripts work in global and are reachable everywhere.

Actually in development...

## LIST

### CURRENCY

```js
dphelper.currency( val, int = 'en-US', cur = 'USD' )
```

### MEMORY / STORAGE

```js
dphelper.storage.get( name )
dphelper.storage.set( name , value )
dphelper.storage.delete( name )
dphelper.storage.clearAll()
```

### MEMORY / COOKIE

```js
dphelper.cookie.set( name , value , time , path = '/' )
dphelper.cookie.get( name )
dphelper.cookie.delete( name )
dphelper.cookie.clearAll()
```

### MEMORY / INDEXED-DB

```js
dphelper.indexedDB.create( storeName, table, name )
dphelper.indexedDB.open( storeName )
dphelper.indexedDB.store( storeName, table )
dphelper.indexedDB.insert( storeName, table, key, value )
dphelper.indexedDB.update( storeName, table, key, value )
dphelper.indexedDB.get( storeName, table, key )
dphelper.indexedDB.list()
```

### NUMBERS

```js
dphelper.number.rnd() // generate long random number
dphelper.number.tmr() // generate number by timer
dphelper.number.add() 
dphelper.number.sub() 
dphelper.number.multi() 
dphelper.number.div() 
dphelper.number.rem() 
dphelper.number.exp() 
```

### TIME

```js
dphelper.time.epoch() // return epoch time
```

### DATE

```js
dphelper.date.toIso( value , int = 'en' )           // format in bese of internationalization
dphelper.date.toMMDDYYYY( value )                   // format not common 
dphelper.date.convert( value , format )             // format like 23 Dec, 2021
dphelper.date.iso2Epoch( value )                    // format iso date to epoch
dphelper.date.localIsoTime( value )                 // format Thu, 31 May 2012 08:33:41 +0000
dphelper.date.utc()                                 // generate UTC date format
dphelper.date.parse( value )                        // epoch to human date 
```

### PATH

------ url

```js
dphelper.path.rail()                       // Generate array start from subFolders
dphelper.path.query()                      // Generate array start from querystring
dphelper.path.hash()                       // Generate array start from hash path
```

------ Browser:

```js
dphelper.browser.state( state, title, url )     // Create a new spushState and avoid page reload
dphelper.browser.forw( times )                  // go next visited page
dphelper.browser.back( times )                  // go previous page (type 1 or more - times is ever negative)
dphelper.browser.href( url )                    // go previous page (type 1 or more - times is ever negative)
dphelper.browser.reload()                       // reload page and discard POST data
```

------ options

```js
dphelper.anchorToOnClick( element )           // Transform all a href to onclick (use . for class or # for div )
```

### LOAD

```js
dphelper.load.file(element, path)                                            // text to element
dphelper.load.json( file )                                                   // load json data to a variable
dphelper.load.jsonRemote( path, method='GET', type='application/json' )    // load json from remote to variable
```

### FORM

```js
dphelper.form.serialize( form )             // serialize a form (input array) to json
```

### ARRAY

```js
dphelper.array.find( id, array )            // find value by ID into array
dphelper.array.delete( id, array )          // delete value by ID from array
dphelper.array.merge( arrayA , arrayB )     // merge two array
dphelper.array.unique( array )              // remove all duplicates
```

### OBJECT

```js
dphelper.obj.toArray( obj )                     // convert objet to array (compatible with old browsers)
dphelper.obj.serialize( value )                 // serialize
dphelper.obj.deSerialize( value )               // de-serialize
```

... TO BE CONTINUE
