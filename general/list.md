# dpHelper Functions List

## Overview
This document provides a comprehensive list of all available functions in the `dphelper` library along with their descriptions.

## Functions

### Anchor
- `toOnClick(el: string): void`
  **Description:** Converts an element's href attribute to an onclick event.

### Array
- `find(array: any[], key: any): any`
  **Description:** Finds an element in an array by key.
- `unique(array: any[]): any[]`
  **Description:** Returns an array with unique elements.
- `delete(array: any[], key: any): void`
  **Description:** Deletes an element from an array by key.
- `merge(arrayA: any[], arrayB: any[]): any[]`
  **Description:** Merges two arrays.
- `mergeByKey(arrayA: any[], arrayB: any[], key: string): any[]`
  **Description:** Merges two arrays by a specific key.
- `asc(array: any[]): any[]`
  **Description:** Sorts an array in ascending order.
- `desc(array: any[]): any[]`
  **Description:** Sorts an array in descending order.
- `duplicates(array: any[]): any[]`
  **Description:** Returns an array of duplicate elements.
- `even(array: any[]): any[]`
  **Description:** Returns an array of even numbers.
- `odd(array: any[]): any[]`
  **Description:** Returns an array of odd numbers.
- `toObj(array: any[]): object`
  **Description:** Converts an array to an object.
- `sumColumn(array: any[], column: number): number`
  **Description:** Sums the values of a specific column in an array.
- `shuffle(array: any[]): any[]`
  **Description:** Shuffles the elements of an array.
- `generate(num: number): any[]`
  **Description:** Generates an array with a specified number of elements.
- `testArrayInt(array: any[]): number[]`
  **Description:** Tests if the elements of an array are integers.
- `rand32(number: number): any`
  **Description:** Generates a random 32-bit number.
- `findindex(array: any[], key: any): number`
  **Description:** Finds the index of an element in an array by key.
- `pathToJson(array: any[], separator?: string): object`
  **Description:** Converts an array to a JSON object using a separator.
- `deepClone(src: any): any`
  **Description:** Creates a deep clone of an object.
- `match(arrayWords: any[], arrayToCheck: any[]): boolean`
  **Description:** Checks if two arrays match.

### Audio
- `play(url: string): void`
  **Description:** Plays an audio file from a URL.

### Avoid
- `cache(uri: string): string`
  **Description:** Caches a URI.

### Browser
- `state(state: any, title: any, url: any): void`
  **Description:** Changes the browser state.
- `forw(times: number): void`
  **Description:** Moves forward in the browser history.
- `back(times: number): void`
  **Description:** Moves backward in the browser history.
- `reload(): void`
  **Description:** Reloads the current page.
- `href(url: string): void`
  **Description:** Navigates to a URL.
- `offLine(text?: string): void`
  **Description:** Displays an offline message.
- `zoom(): number`
  **Description:** Gets the current zoom level.
- `status(code: number): string`
  **Description:** Gets the status text for a status code.

### Check
- `url(url: string): any`
  **Description:** Checks if a URL is valid.
- `version(v1: string, v2: string, opts: any): any`
  **Description:** Compares two version strings.
- `npmVer(npm: string): any`
  **Description:** Gets the version of an npm package.

### Color
- `hex(c: any): string`
  **Description:** Converts a color to hex format.
- `toHex(rgb: any): string`
  **Description:** Converts RGB to hex format.
- `toRGB(c: any): Array`
  **Description:** Converts a color to RGB format.
- `oleColor(c: any): string`
  **Description:** Converts a color to OLE format.
- `gradient(colorStart: any, colorEnd: any, colorCount: any): any`
  **Description:** Generates a gradient between two colors.

### Console
- `info(name: string, message: string, fn: Function): void`
  **Description:** Logs an info message to the console.
- `stop(options?: string[]): void`
  **Description:** Stops the console.
- `toHtml(el: string): void`
  **Description:** Converts console output to HTML.

### Cookie
- `set(pars: { name: any, value: any, time?: any, path?: "/", sameSite?: "Lax", secure?: "Secure" | "false" }): any`
  **Description:** Sets a cookie.
- `get(name: string): any`
  **Description:** Gets a cookie by name.
- `delete(name: string): any`
  **Description:** Deletes a cookie by name.
- `clearAll(): any`
  **Description:** Clears all cookies.

### Coords
- `degreesToRadians(degrees: any): any`
  **Description:** Converts degrees to radians.
- `latToMeters(points: any): any`
  **Description:** Converts latitude to meters.
- `toVector(points: any): any`
  **Description:** Converts points to a vector.
- `convertToDecDegrees(deg: any, minutes: any, sec: any, direction: any): any`
  **Description:** Converts coordinates to decimal degrees.
- `distance(point1: any, point2: any): any`
  **Description:** Calculates the distance between two points.
- `polarToCartesian(centerX: any, centerY: any, radius: any, angleInDegrees: any): any`
  **Description:** Converts polar coordinates to Cartesian coordinates.
- `mapDegreesToPixels(degree: number, minDegree: number, maxDegree: number, minPixel: number, maxPixel: number, padding: number): number`
  **Description:** Maps degrees to pixels.

### Credits
- `credits: Function`
  **Description:** Displays credits.

### Date
- `days(lang?: string): string[]`
  **Description:** Returns the days of the week in a specified language.
- `months(lang?: string): string[]`
  **Description:** Returns the months of the year in a specified language.
- `year(): number`
  **Description:** Returns the current year.
- `toIso(value: any, int?: string): string | null`
  **Description:** Converts a date to ISO format.
- `toMMDDYYYY(value: any): string`
  **Description:** Converts a date to MM/DD/YYYY format.
- `toYYYYMMDD(value: any): string | undefined`
  **Description:** Converts a date to YYYY/MM/DD format.
- `toHuman(value: any): string`
  **Description:** Converts a date to a human-readable format.
- `convert(value: any, format: string[]): string | null`
  **Description:** Converts a date to a specified format.
- `iso2Epoch(value: any): number`
  **Description:** Converts an ISO date to epoch time.
- `localIsoTime(value: any): string`
  **Description:** Converts a date to local ISO time.
- `utc(): string`
  **Description:** Returns the current UTC time.
- `parse(value: any, separator?: string): string | null`
  **Description:** Parses a date string.
- `addDays(date: any, days: number): Date`
  **Description:** Adds days to a date.
- `dateTimeToString(dateObject: any): string`
  **Description:** Converts a date object to a string.
- `isoToHuman(value: any, symbol?: string): string | null`
  **Description:** Converts an ISO date to a human-readable format.
- `fullDate(): string`
  **Description:** Returns the full date.
- `epoch(): number`
  **Description:** Returns the current epoch time.
- `diffInDays(d1: any, d2: any): number`
  **Description:** Calculates the difference in days between two dates.
- `diffInWeeks(d1: any, d2: any): number`
  **Description:** Calculates the difference in weeks between two dates.
- `diffInMonths(d1: any, d2: any): number`
  **Description:** Calculates the difference in months between two dates.
- `diffInYears(d1: any, d2: any): number`
  **Description:** Calculates the difference in years between two dates.
- `dateToYMD(date: any): string`
  **Description:** Converts a date to YYYY-MM-DD format.
- `collection(params: { date?: Date; type: string; locale?: string }): string | undefined`
  **Description:** Returns a collection of dates.
- `timeZones(): string[]`
  **Description:** Returns a list of time zones.

### Disable
- `select(el?: string): void`
  **Description:** Disables text selection.
- `spellCheck(tmr?: number): void`
  **Description:** Disables spell check.
- `rightClick(el?: string): void`
  **Description:** Disables right-click.
- `copy(el?: string): void`
  **Description:** Disables copy.
- `paste(el?: string): void`
  **Description:** Disables paste.
- `cut(el?: string): void`
  **Description:** Disables cut.
- `drag(el?: string): void`
  **Description:** Disables drag.

### Dispatch
- `set(name: string, value?: any): void`
  **Description:** Sets a dispatch event.
- `listen(name: string, cb?: (e: Event) => void, flag?: boolean): void`
  **Description:** Listens for a dispatch event.
- `remove(name: string): void`
  **Description:** Removes a dispatch event.

### Element
- `fitScale(el: any, scale?: number, fit?: boolean): void`
  **Description:** Fits an element to a scale.
- `scaleBasedOnWindow(elm: any, scale: number, fit: boolean): void`
  **Description:** Scales an element based on the window size.

### Events
- `list(el: Element): any`
  **Description:** Lists all events on an element.
- `multi(element: Element, eventNames: string, listener: EventListener): void`
  **Description:** Adds multiple event listeners to an element.
- `copy(el: string): void`
  **Description:** Copies an element.
- `onDrag(elem: string): void`
  **Description:** Adds a drag event to an element.
- `keys(e: KeyboardEvent): { key: string; ctrl: boolean; alt: boolean; shift: boolean }`
  **Description:** Gets the key, ctrl, alt, and shift status from a keyboard event.

### Form
- `serialize(form: HTMLFormElement): { [key: string]: any }`
  **Description:** Serializes a form to an object.
- `confirmType(type: string, value: any): boolean`
  **Description:** Confirms the type of a value.
- `required(value: any): string | undefined`
  **Description:** Checks if a value is required.
- `minLength(value: any, num?: number): string | undefined`
  **Description:** Checks if a value meets the minimum length.
- `maxLength(value: any, num?: number): string | undefined`
  **Description:** Checks if a value exceeds the maximum length.
- `maxPhoneNumber(value: any, num?: number): string | undefined`
  **Description:** Checks if a phone number exceeds the maximum length.
- `isNumeric(value: any): boolean`
  **Description:** Checks if a value is numeric.
- `isEmail(value: any): boolean`
  **Description:** Checks if a value is an email.
- `pattern(e: Event): void`
  **Description:** Validates a pattern.
- `noSpecialChars(e: Event): void`
  **Description:** Disallows special characters.
- `table(size: [number, number], id: string, elem: HTMLElement): void`
  **Description:** Creates a table.
- `sanitize(str: string): string | undefined`
  **Description:** Sanitizes a string.

### Format
- `currency(value: number, locale?: string, currency?: string): string`
  **Description:** Formats a value as currency.
- `phoneNumber(value: string, countryCode?: string): string`
  **Description:** Formats a phone number.

### Imports
- `file(elem: string, file: string): Promise<void>`
  **Description:** Imports a file.

### Json
- `counter(json: any, key?: string, val?: any): number | null`
  **Description:** Counts occurrences in a JSON object.
- `toCsv(jsonInput: any): string`
  **Description:** Converts JSON to CSV.
- `saveCsvAs(csvData: string, fileName: string): void`
  **Description:** Saves CSV data as a file.
- `is(str: string): boolean`
  **Description:** Checks if a string is valid JSON.
- `parse(file: string): any`
  **Description:** Parses a JSON file.
- `sanitize(str: string): string`
  **Description:** Sanitizes a JSON string.
- `sanitizeJsonValue(str: string): string`
  **Description:** Sanitizes a JSON value.

### Load
- `all(context: __WebpackModuleApi.RequireContext, cacheName?: string): void`
  **Description:** Loads all modules in a context.
- `file(filePath: string): Promise<string>`
  **Description:** Loads a file.
- `fileToElement(elementSelector: string, filePath: string): Promise<void>`
  **Description:** Loads a file into an element.
- `json(filePath: string): Promise<any>`
  **Description:** Loads a JSON file.
- `remote(path: string, method?: string, headers?: HeadersInit): Promise<any>`
  **Description:** Loads data from a remote URL.
- `script(scripts: string[], elementSelector?: string): void`
  **Description:** Loads scripts.
- `toJson(context: __WebpackModuleApi.RequireContext, cacheName?: string): void`
  **Description:** Converts a context to JSON.

### Logging
- `list: { type: string; message: string }`
  **Description:** List of log messages.
- `reg(txt: string): void`
  **Description:** Logs a regular message.
- `debug(txt: string): void`
  **Description:** Logs a debug message.
- `error(txt: string): void`
  **Description:** Logs an error message.

### Math
- `rnd(): number`
  **Description:** Generates a random number.
- `tmr(): number`
  **Description:** Returns the current time in milliseconds.
- `add(a: number, b: number): number`
  **Description:** Adds two numbers.
- `sub(a: number, b: number): number`
  **Description:** Subtracts two numbers.
- `multi(a: number, b: number): number`
  **Description:** Multiplies two numbers.
- `div(a: number, b: number): number`
  **Description:** Divides two numbers.
- `rem(a: number, b: number): number`
  **Description:** Returns the remainder of two numbers.
- `exp(a: number, b: number): number`
  **Description:** Returns the exponent of two numbers.
- `isOdd(a: number): boolean`
  **Description:** Checks if a number is odd.
- `float2int(a: number): number`
  **Description:** Converts a float to an integer.
- `percent(n: number, tot: number): number`
  **Description:** Calculates the percentage.
- `isPrime(n: number): boolean`
  **Description:** Checks if a number is prime.

### Memory
- `lock(obj: string): void`
  **Description:** Locks an object in memory.
- `unlock(obj: string): void`
  **Description:** Unlocks an object in memory.

### Object
- `toArray(object: Record<string, any>): [string, any][]`
  **Description:** Converts an object to an array.
- `replaceNullObjects(data: Record<string, any>): Record<string, any>`
  **Description:** Replaces null objects in a record.
- `serialize(value: any): any`
  **Description:** Serializes a value.
- `deSerialize(valueNew: any): any`
  **Description:** Deserializes a value.
- `sort(o: Record<string, any>): Record<string, any>`
  **Description:** Sorts an object.
- `toXML(obj: Record<string, any>): string`
  **Description:** Converts an object to XML.
- `find(array: any[], key: string, value: any): any`
  **Description:** Finds an element in an array by key and value.
- `instance(obj: any): any`
  **Description:** Returns the instance of an object.
- `updateByKey(obj: Record<string, any>, key: string, newValue: any): Record<string, any>`
  **Description:** Updates an object by key.
- `findindex(array: any[], key: string): number`
  **Description:** Finds the index of an element in an array by key.
- `parse(val: any): any`
  **Description:** Parses a value.
- `isObject(val: any): boolean`
  **Description:** Checks if a value is an object.
- `diff(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, { obj1: any, obj2: any }>`
  **Description:** Finds the difference between two objects.
- `path(prop: string, array: string[], separator?: string): string`
  **Description:** Converts a property path to a string.

### Observer
- `(stateName: string, callBack?: Function, option?: object): void`
  **Description:** Observes a state.
- `list(): any`
  **Description:** Lists all observers.
- `remove(name: string): void`
  **Description:** Removes an observer.
- `removeAll(): void`
  **Description:** Removes all observers.

### Path
- `rail(): string[]`
  **Description:** Returns the rail path.
- `hash(): string[]`
  **Description:** Returns the hash path.
- `query(url: string): Record<string, string>`
  **Description:** Parses the query string of a URL.

### Promise
- `check(p: any): boolean`
  **Description:** Checks if a value is a promise.
- `resolve(data: any): Promise<any>`
  **Description:** Resolves a promise with data.

### Sanitize
- `html(s: string): string`
  **Description:** Sanitizes HTML.

### Screen
- `fullScreen(el: string): void`
  **Description:** Enables full screen mode for an element.
- `toggle(el: string): void`
  **Description:** Toggles full screen mode for an element.
- `info(): { width: number; height: number; availWidth: number; availHeight: number; colorDepth: number; pixelDepth: number }`
  **Description:** Gets screen information.

### Scrollbar
- `custom(el: string, options: any): void`
  **Description:** Customizes a scrollbar.
- `indicator(props: any): void`
  **Description:** Adds a scrollbar indicator.
- `position: { get(el: any): void; set(el: any): void }`
  **Description:** Gets and sets scrollbar position.
- `smooth(target: any, speed: any, smooth: any): void`
  **Description:** Smooth scrolls to a target.
- `scrollTo(container: string, element: string, gap?: number): void`
  **Description:** Scrolls to an element within a container.

### Security
- `uuid: { byVal(string: string): string; v4: string; v5: string }`
  **Description:** Generates UUIDs.
- `hashPass(u: string, p: string, t?: string): Promise<string>`
  **Description:** Hashes a password.
- `crypt(u: string, p: string, mode?: string): string`
  **Description:** Encrypts data.
- `deCrypt(u: string, p: string, mode?: string): string`
  **Description:** Decrypts data.
- `AES_KeyGen(passKey?: string): string`
  **Description:** Generates an AES key.
- `SHA256_Hex(passKey: string): string`
  **Description:** Generates a SHA256 hash.

### Shortcut
- `keys(e: any, trigger: any): void`
  **Description:** Adds a keyboard shortcut.

### Socket
- `info(): string`
  **Description:** Gets socket information.
- `start(element: any, server: any): void`
  **Description:** Starts a socket connection.
- `conn(id: any, server: any): [WebSocket, any]`
  **Description:** Connects to a socket server.
- `connect(server: any): void`
  **Description:** Connects to a server.
- `open(id: any, server: any): void`
  **Description:** Opens a socket connection.
- `send(mex: any, type?: string): void`
  **Description:** Sends a message through a socket.
- `ping(): void`
  **Description:** Sends a ping through a socket.
- `receive(el?: any): void`
  **Description:** Receives a message through a socket.
- `keepAlive(): void`
  **Description:** Keeps a socket connection alive.
- `check(): void`
  **Description:** Checks the status of a socket connection.
- `list(): WebSocket[]`
  **Description:** Lists all socket connections.

### SVG
- `init(container: HTMLElement, source1: [HTMLElement, string], source2: [HTMLElement, string], cb?: Function): void`
  **Description:** Initializes an SVG container.
- `check(): boolean`
  **Description:** Checks if SVG is supported.
- `update(rect1: HTMLElement, rect2: HTMLElement, cxn: HTMLElement): void`
  **Description:** Updates an SVG element.
- `getCurve(p1: [number, number], p2: [number, number], dx: number): string`
  **Description:** Gets a curve path between two points.
- `getIntersection(dx: number, dy: number, cx: number, cy: number, w: number, h: number): [number, number]`
  **Description:** Gets the intersection point of a curve.
- `setConnector(source: HTMLElement, side: string): HTMLElement`
  **Description:** Sets a connector for an SVG element.
- `removeConnection(container: HTMLElement): void`
  **Description:** Removes a connection from an SVG container.
- `makeScrollable(svgContainer: HTMLElement, scrollContainer: HTMLElement, elm1: HTMLElement, elm2: HTMLElement, rect1: HTMLElement, rect2: HTMLElement): void`
  **Description:** Makes an SVG container scrollable.
- `makeDraggable(evt: Event): void`
  **Description:** Makes an SVG element draggable.
- `toggle(evt: Event, container: HTMLElement, source1: HTMLElement, source2: HTMLElement): void`
  **Description:** Toggles an SVG element.
- `convert(options: ConvertOptions): string | void`
  **Description:** Converts an SVG element.

### System
- `multiSplit(): any`
  **Description:** Splits a string into multiple parts.

### Termina
- `termina(): Terminal`
  **Description:** Initializes a terminal.

### Text
- `trim(s: string, c: string, b: number, e: number): string`
  **Description:** Trims a string.
- `capitalize(txt: string): string`
  **Description:** Capitalizes a string.
- `lower(txt: string): string`
  **Description:** Converts a string to lowercase.
- `upper(txt: string): string`
  **Description:** Converts a string to uppercase.
- `nl2br(str: string): string`
  **Description:** Converts newlines to <br> tags.
- `sanitize(str: string): string`
  **Description:** Sanitizes a string.
- `camelCase: { toSpace(string: string): string; toUnderscore(string: string): string }`
  **Description:** Converts camelCase to space or underscore.
- `fitContainer(el: string): void`
  **Description:** Fits a text element to its container.

### Timer
- `sleep(ms: number): Promise<void>`
  **Description:** Pauses execution for a specified time.
- `percentage(start: string, end: string): string`
  **Description:** Calculates the percentage of time elapsed.

### Tools
- `getip(): Promise<void>`
  **Description:** Gets the IP address.
- `byteSize(bytes: number): string`
  **Description:** Converts bytes to a human-readable format.
- `zIndex(): number`
  **Description:** Gets the z-index.
- `zeroToFalse(value: number): boolean | number`
  **Description:** Converts zero to false.

### Translators
- `convertMatrixToScale(values: any): number`
  **Description:** Converts a matrix to a scale.

### Trigger
- `click(elem: string): void`
  **Description:** Triggers a click event.
- `change(elem: string): void`
  **Description:** Triggers a change event.
- `input(elem: string): void`
  **Description:** Triggers an input event.

### Type
- `of(p: any): string`
  **Description:** Gets the type of a value.
- `instOfObj(p: any): boolean`
  **Description:** Checks if a value is an instance of an object.
- `isNull(p: any): (i: any) => boolean`
  **Description:** Checks if a value is null.
- `isBool(val: any): boolean`
  **Description:** Checks if a value is a boolean.

### UI
- `ui: null`
  **Description:** User interface operations.

### Window
- `enhancement(): void`
  **Description:** Enhances the window.
- `animationframe(): any`
  **Description:** Gets the animation frame.
- `center(params: { url: string; title: string; name: string; w: number; h: number }): void`
  **Description:** Centers a window.
- `onBeforeUnLoad(e: any): void`
  **Description:** Handles the before unload event.
- `purge(d?: Document, time?: number): void`
  **Description:** Purges the document.
- `stopZoomWheel(e: any): void`
  **Description:** Stops the zoom wheel.
- `setZoom(element?: string, zoom?: number): string`
  **Description:** Sets the zoom level.
- `getZoom(element?: string): number`
  **Description:** Gets the zoom level.

## License
This project is licensed under the MIT License.
