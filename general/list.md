# All Functions List

## Overview
This document provides a comprehensive list of all available functions in the `dphelper` library along with their descriptions.

## Functions

### Anchor
- `dphelper.anchor.toOnClick(el: string): void`
  <br>**Description:** Converts an element's href attribute to an onclick event.

### Array
- `dphelper.array.find(array: any[], key: any): any`
  <br>**Description:** Finds an element in an array by key.
- `dphelper.array.unique(array: any[]): any[]`
  <br>**Description:** Returns an array with unique elements.
- `dphelper.array.delete(array: any[], key: any): void`
  <br>**Description:** Deletes an element from an array by key.
- `dphelper.array.merge(arrayA: any[], arrayB: any[]): any[]`
  <br>**Description:** Merges two arrays.
- `dphelper.array.mergeByKey(arrayA: any[], arrayB: any[], key: string): any[]`
  <br>**Description:** Merges two arrays by a specific key.
- `dphelper.array.asc(array: any[]): any[]`
  <br>**Description:** Sorts an array in ascending order.
- `dphelper.array.desc(array: any[]): any[]`
  <br>**Description:** Sorts an array in descending order.
- `dphelper.array.duplicates(array: any[]): any[]`
  <br>**Description:** Returns an array of duplicate elements.
- `dphelper.array.even(array: any[]): any[]`
  <br>**Description:** Returns an array of even numbers.
- `dphelper.array.odd(array: any[]): any[]`
  <br>**Description:** Returns an array of odd numbers.
- `dphelper.array.toObj(array: any[]): object`
  <br>**Description:** Converts an array to an object.
- `dphelper.array.sumColumn(array: any[], column: number): number`
  <br>**Description:** Sums the values of a specific column in an array.
- `dphelper.array.shuffle(array: any[]): any[]`
  <br>**Description:** Shuffles the elements of an array.
- `dphelper.array.generate(num: number): any[]`
  <br>**Description:** Generates an array with a specified number of elements.
- `dphelper.array.testArrayInt(array: any[]): number[]`
  <br>**Description:** Tests if the elements of an array are integers.
- `dphelper.array.rand32(number: number): any`
  <br>**Description:** Generates a random 32-bit number.
- `dphelper.array.findindex(array: any[], key: any): number`
  <br>**Description:** Finds the index of an element in an array by key.
- `dphelper.array.pathToJson(array: any[], separator?: string): object`
  <br>**Description:** Converts an array to a JSON object using a separator.
- `deepClone(src: any): any`
  <br>**Description:** Creates a deep clone of an object.
- `dphelper.array.match(arrayWords: any[], arrayToCheck: any[]): boolean`
  <br>**Description:** Checks if two arrays match.

### Audio
- `dphelper.audio.play(url: string): void`
  <br>**Description:** Plays an audio file from a URL.

### Avoid
- `dphelper.avoid.cache(uri: string): string`
  <br>**Description:** Caches a URI.

### Browser
- `dphelper.browser.state(state: any, title: any, url: any): void`
  <br>**Description:** Changes the browser state.
- `dphelper.browser.forw(times: number): void`
  <br>**Description:** Moves forward in the browser history.
- `dphelper.browser.back(times: number): void`
  <br>**Description:** Moves backward in the browser history.
- `dphelper.browser.reload(): void`
  <br>**Description:** Reloads the current page.
- `dphelper.browser.href(url: string): void`
  <br>**Description:** Navigates to a URL.
- `dphelper.browser.offLine(text?: string): void`
  <br>**Description:** Displays an offline message.
- `dphelper.browser.zoom(): number`
  <br>**Description:** Gets the current zoom level.
- `dphelper.browser.status(code: number): string`
  <br>**Description:** Gets the status text for a status code.

### Check
- `dphelper.check.url(url: string): any`
  <br>**Description:** Checks if a URL is valid.
- `dphelper.check.version(v1: string, v2: string, opts: any): any`
  <br>**Description:** Compares two version strings.
- `dphelper.check.npmVer(npm: string): any`
  <br>**Description:** Gets the version of an npm package.

### Color
- `dphelper.color.hex(c: any): string`
  <br>**Description:** Converts a color to hex format.
- `dphelper.color.toHex(rgb: any): string`
  <br>**Description:** Converts RGB to hex format.
- `dphelper.color.toRGB(c: any): Array`
  <br>**Description:** Converts a color to RGB format.
- `dphelper.color.oleColor(c: any): string`
  <br>**Description:** Converts a color to OLE format.
- `dphelper.color.gradient(colorStart: any, colorEnd: any, colorCount: any): any`
  <br>**Description:** Generates a gradient between two colors.

### Console
- `dphelper.console.info(name: string, message: string, fn: Function): void`
  <br>**Description:** Logs an info message to the console.
- `dphelper.console.stop(options?: string[]): void`
  <br>**Description:** Stops the console.
- `dphelper.console.toHtml(el: string): void`
  <br>**Description:** Converts console output to HTML.

### Cookie
- `dphelper.cookie.set(pars: { name: any, value: any, time?: any, path?: "/", sameSite?: "Lax", secure?: "Secure" | "false" }): any`
  <br>**Description:** Sets a cookie.
- `dphelper.cookie.get(name: string): any`
  <br>**Description:** Gets a cookie by name.
- `dphelper.cookie.delete(name: string): any`
  <br>**Description:** Deletes a cookie by name.
- `dphelper.cookie.clearAll(): any`
  <br>**Description:** Clears all cookies.

### Coords
- `dphelper.coods.degreesToRadians(degrees: any): any`
  <br>**Description:** Converts degrees to radians.
- `dphelper.coods.latToMeters(points: any): any`
  <br>**Description:** Converts latitude to meters.
- `dphelper.coods.toVector(points: any): any`
  <br>**Description:** Converts points to a vector.
- `dphelper.coods.convertToDecDegrees(deg: any, minutes: any, sec: any, direction: any): any`
  <br>**Description:** Converts coordinates to decimal degrees.
- `dphelper.coods.distance(point1: any, point2: any): any`
  <br>**Description:** Calculates the distance between two points.
- `dphelper.coods.polarToCartesian(centerX: any, centerY: any, radius: any, angleInDegrees: any): any`
  <br>**Description:** Converts polar coordinates to Cartesian coordinates.
- `dphelper.coods.mapDegreesToPixels(degree: number, minDegree: number, maxDegree: number, minPixel: number, maxPixel: number, padding: number): number`
  <br>**Description:** Maps degrees to pixels.

### Date
- `dphelper.date.days(lang?: string): string[]`
  <br>**Description:** Returns the days of the week in a specified language.
- `dphelper.date.months(lang?: string): string[]`
  <br>**Description:** Returns the months of the year in a specified language.
- `dphelper.date.year(): number`
  <br>**Description:** Returns the current year.
- `dphelper.date.toIso(value: any, int?: string): string | null`
  <br>**Description:** Converts a date to ISO format.
- `dphelper.date.toMMDDYYYY(value: any): string`
  <br>**Description:** Converts a date to MM/DD/YYYY format.
- `dphelper.date.toYYYYMMDD(value: any): string | undefined`
  <br>**Description:** Converts a date to YYYY/MM/DD format.
- `dphelper.date.toHuman(value: any): string`
  <br>**Description:** Converts a date to a human-readable format.
- `dphelper.date.convert(value: any, format: string[]): string | null`
  <br>**Description:** Converts a date to a specified format.
- `dphelper.date.iso2Epoch(value: any): number`
  <br>**Description:** Converts an ISO date to epoch time.
- `dphelper.date.localIsoTime(value: any): string`
  <br>**Description:** Converts a date to local ISO time.
- `dphelper.date.utc(): string`
  <br>**Description:** Returns the current UTC time.
- `dphelper.date.parse(value: any, separator?: string): string | null`
  <br>**Description:** Parses a date string.
- `dphelper.date.addDays(date: any, days: number): Date`
  <br>**Description:** Adds days to a date.
- `dphelper.date.dateTimeToString(dateObject: any): string`
  <br>**Description:** Converts a date object to a string.
- `dphelper.date.isoToHuman(value: any, symbol?: string): string | null`
  <br>**Description:** Converts an ISO date to a human-readable format.
- `dphelper.date.fullDate(): string`
  <br>**Description:** Returns the full date.
- `dphelper.date.epoch(): number`
  <br>**Description:** Returns the current epoch time.
- `dphelper.date.diffInDays(d1: any, d2: any): number`
  <br>**Description:** Calculates the difference in days between two dates.
- `dphelper.date.diffInWeeks(d1: any, d2: any): number`
  <br>**Description:** Calculates the difference in weeks between two dates.
- `dphelper.date.diffInMonths(d1: any, d2: any): number`
  <br>**Description:** Calculates the difference in months between two dates.
- `dphelper.date.diffInYears(d1: any, d2: any): number`
  <br>**Description:** Calculates the difference in years between two dates.
- `dphelper.date.dateToYMD(date: any): string`
  <br>**Description:** Converts a date to YYYY-MM-DD format.
- `dphelper.date.collection(params: { date?: Date; type: string; locale?: string }): string | undefined`
  <br>**Description:** Returns a collection of dates.
- `dphelper.date.timeZones(): string[]`
  <br>**Description:** Returns a list of time zones.

### Disable
- `dphelper.disable.select(el?: string): void`
  <br>**Description:** Disables text selection.
- `dphelper.disable.spellCheck(tmr?: number): void`
  <br>**Description:** Disables spell check.
- `dphelper.disable.rightClick(el?: string): void`
  <br>**Description:** Disables right-click.
- `dphelper.disable.copy(el?: string): void`
  <br>**Description:** Disables copy.
- `dphelper.disable.paste(el?: string): void`
  <br>**Description:** Disables paste.
- `dphelper.disable.cut(el?: string): void`
  <br>**Description:** Disables cut.
- `dphelper.disable.drag(el?: string): void`
  <br>**Description:** Disables drag.

### Dispatch
- `dphelper.dispatch.set(name: string, value?: any): void`
  <br>**Description:** Sets a dispatch event.
- `dphelper.dispatch.listen(name: string, cb?: (e: Event) => void, flag?: boolean): void`
  <br>**Description:** Listens for a dispatch event.
- `dphelper.dispatch.remove(name: string): void`
  <br>**Description:** Removes a dispatch event.

### Element
- `dphelper.element.fitScale(el: any, scale?: number, fit?: boolean): void`
  <br>**Description:** Fits an element to a scale.
- `dphelper.element.scaleBasedOnWindow(elm: any, scale: number, fit: boolean): void`
  <br>**Description:** Scales an element based on the window size.

### Events
- `dphelper.events.list(el: Element): any`
  <br>**Description:** Lists all events on an element.
- `dphelper.events.multi(element: Element, eventNames: string, listener: EventListener): void`
  <br>**Description:** Adds multiple event listeners to an element.
- `dphelper.events.copy(el: string): void`
  <br>**Description:** Copies an element.
- `dphelper.events.onDrag(elem: string): void`
  <br>**Description:** Adds a drag event to an element.
- `dphelper.events.keys(e: KeyboardEvent): { key: string; ctrl: boolean; alt: boolean; shift: boolean }`
  <br>**Description:** Gets the key, ctrl, alt, and shift status from a keyboard event.

### Form
- `dphelper.form.serialize(form: HTMLFormElement): { [key: string]: any }`
  <br>**Description:** Serializes a form to an object.
- `dphelper.form.confirmType(type: string, value: any): boolean`
  <br>**Description:** Confirms the type of a value.
- `dphelper.form.required(value: any): string | undefined`
  <br>**Description:** Checks if a value is required.
- `dphelper.form.minLength(value: any, num?: number): string | undefined`
  <br>**Description:** Checks if a value meets the minimum length.
- `dphelper.form.maxLength(value: any, num?: number): string | undefined`
  <br>**Description:** Checks if a value exceeds the maximum length.
- `dphelper.form.maxPhoneNumber(value: any, num?: number): string | undefined`
  <br>**Description:** Checks if a phone number exceeds the maximum length.
- `dphelper.form.isNumeric(value: any): boolean`
  <br>**Description:** Checks if a value is numeric.
- `dphelper.form.isEmail(value: any): boolean`
  <br>**Description:** Checks if a value is an email.
- `dphelper.form.pattern(e: Event): void`
  <br>**Description:** Validates a pattern.
- `dphelper.form.noSpecialChars(e: Event): void`
  <br>**Description:** Disallows special characters.
- `dphelper.form.table(size: [number, number], id: string, elem: HTMLElement): void`
  <br>**Description:** Creates a table.
- `dphelper.form.sanitize(str: string): string | undefined`
  <br>**Description:** Sanitizes a string.

### Format
- `dphelper.format.currency(value: number, locale?: string, currency?: string): string`
  <br>**Description:** Formats a value as currency.
- `dphelper.format.phoneNumber(value: string, countryCode?: string): string`
  <br>**Description:** Formats a phone number.

### Imports
- `dphelper.imports.file(elem: string, file: string): Promise<void>`
  <br>**Description:** Imports a file.

### Json
- `dphelper.json.counter(json: any, key?: string, val?: any): number | null`
  <br>**Description:** Counts occurrences in a JSON object.
- `dphelper.json.toCsv(jsonInput: any): string`
  <br>**Description:** Converts JSON to CSV.
- `dphelper.json.saveCsvAs(csvData: string, fileName: string): void`
  <br>**Description:** Saves CSV data as a file.
- `dphelper.json.is(str: string): boolean`
  <br>**Description:** Checks if a string is valid JSON.
- `dphelper.json.parse(file: string): any`
  <br>**Description:** Parses a JSON file.
- `dphelper.json.sanitize(str: string): string`
  <br>**Description:** Sanitizes a JSON string.
- `dphelper.json.sanitizeJsonValue(str: string): string`
  <br>**Description:** Sanitizes a JSON value.

### Load
- `dphelper.load.all(context: __WebpackModuleApi.RequireContext, cacheName?: string): void`
  <br>**Description:** Loads all modules in a context.
- `dphelper.load.file(filePath: string): Promise<string>`
  <br>**Description:** Loads a file.
- `dphelper.load.fileToElement(elementSelector: string, filePath: string): Promise<void>`
  <br>**Description:** Loads a file into an element.
- `dphelper.load.json(filePath: string): Promise<any>`
  <br>**Description:** Loads a JSON file.
- `dphelper.load.remote(path: string, method?: string, headers?: HeadersInit): Promise<any>`
  <br>**Description:** Loads data from a remote URL.
- `dphelper.load.script(scripts: string[], elementSelector?: string): void`
  <br>**Description:** Loads scripts.
- `dphelper.load.toJson(context: __WebpackModuleApi.RequireContext, cacheName?: string): void`
  <br>**Description:** Converts a context to JSON.

### Logging
- `dphelper.logging.list: { type: string; message: string }`
  <br>**Description:** List of log messages.
- `dphelper.logging.reg(txt: string): void`
  <br>**Description:** Logs a regular message.
- `dphelper.logging.debug(txt: string): void`
  <br>**Description:** Logs a debug message.
- `dphelper.logging.error(txt: string): void`
  <br>**Description:** Logs an error message.

### Math
- `dphelper.math.rnd(): number`
  <br>**Description:** Generates a random number.
- `dphelper.math.tmr(): number`
  <br>**Description:** Returns the current time in milliseconds.
- `dphelper.math.add(a: number, b: number): number`
  <br>**Description:** Adds two numbers.
- `dphelper.math.sub(a: number, b: number): number`
  <br>**Description:** Subtracts two numbers.
- `dphelper.math.multi(a: number, b: number): number`
  <br>**Description:** Multiplies two numbers.
- `dphelper.math.div(a: number, b: number): number`
  <br>**Description:** Divides two numbers.
- `dphelper.math.rem(a: number, b: number): number`
  <br>**Description:** Returns the remainder of two numbers.
- `dphelper.math.exp(a: number, b: number): number`
  <br>**Description:** Returns the exponent of two numbers.
- `dphelper.math.isOdd(a: number): boolean`
  <br>**Description:** Checks if a number is odd.
- `dphelper.math.float2int(a: number): number`
  <br>**Description:** Converts a float to an integer.
- `dphelper.math.percent(n: number, tot: number): number`
  <br>**Description:** Calculates the percentage.
- `dphelper.math.isPrime(n: number): boolean`
  <br>**Description:** Checks if a number is prime.

### Memory
- `dphelper.memory.lock(obj: string): void`
  <br>**Description:** Locks an object in memory.
- `dphelper.memory.unlock(obj: string): void`
  <br>**Description:** Unlocks an object in memory.

### Object
- `dphelper.obj.toArray(object: Record<string, any>): [string, any][]`
  <br>**Description:** Converts an object to an array.
- `dphelper.obj.replaceNullObjects(data: Record<string, any>): Record<string, any>`
  <br>**Description:** Replaces null objects in a record.
- `dphelper.obj.serialize(value: any): any`
  <br>**Description:** Serializes a value.
- `dphelper.obj.deSerialize(valueNew: any): any`
  <br>**Description:** Deserializes a value.
- `dphelper.obj.sort(o: Record<string, any>): Record<string, any>`
  <br>**Description:** Sorts an object.
- `dphelper.obj.toXML(obj: Record<string, any>): string`
  <br>**Description:** Converts an object to XML.
- `dphelper.obj.find(array: any[], key: string, value: any): any`
  <br>**Description:** Finds an element in an array by key and value.
- `dphelper.obj.instance(obj: any): any`
  <br>**Description:** Returns the instance of an object.
- `dphelper.obj.updateByKey(obj: Record<string, any>, key: string, newValue: any): Record<string, any>`
  <br>**Description:** Updates an object by key.
- `dphelper.obj.findindex(array: any[], key: string): number`
  <br>**Description:** Finds the index of an element in an array by key.
- `dphelper.obj.parse(val: any): any`
  <br>**Description:** Parses a value.
- `dphelper.obj.isObject(val: any): boolean`
  <br>**Description:** Checks if a value is an object.
- `dphelper.obj.diff(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, { obj1: any, obj2: any }>`
  <br>**Description:** Finds the difference between two objects.
- `dphelper.obj.path(prop: string, array: string[], separator?: string): string`
  <br>**Description:** Converts a property path to a string.

### Path
- `dphelper.path.rail(): string[]`
  <br>**Description:** Returns the rail path.
- `dphelper.path.hash(): string[]`
  <br>**Description:** Returns the hash path.
- `dphelper.path.query(url: string): Record<string, string>`
  <br>**Description:** Parses the query string of a URL.

### Promise
- `dphelper.promise.check(p: any): boolean`
  <br>**Description:** Checks if a value is a promise.
- `dphelper.promise.resolve(data: any): Promise<any>`
  <br>**Description:** Resolves a promise with data.

### Sanitize
- `dphelper.sanitize.html(s: string): string`
  <br>**Description:** Sanitizes HTML.

### Screen
- `dphelper.screen.fullScreen(el: string): void`
  <br>**Description:** Enables full screen mode for an element.
- `dphelper.screen.toggle(el: string): void`
  <br>**Description:** Toggles full screen mode for an element.
- `dphelper.screen.info(): { width: number; height: number; availWidth: number; availHeight: number; colorDepth: number; pixelDepth: number }`
  <br>**Description:** Gets screen information.

### Scrollbar
- `dphelper.scrollbar.custom(el: string, options: any): void`
  <br>**Description:** Customizes a scrollbar.
- `dphelper.scrollbar.indicator(props: any): void`
  <br>**Description:** Adds a scrollbar indicator.
- `dphelper.scrollbar.position: { get(el: any): void; set(el: any): void }`
  <br>**Description:** Gets and sets scrollbar position.
- `dphelper.scrollbar.smooth(target: any, speed: any, smooth: any): void`
  <br>**Description:** Smooth scrolls to a target.
- `dphelper.scrollbar.scrollTo(container: string, element: string, gap?: number): void`
  <br>**Description:** Scrolls to an element within a container.

### Security
- `dphelper.security.uuid: { byVal(string: string): string; v4: string; v5: string }`
  <br>**Description:** Generates UUIDs.
- `dphelper.security.hashPass(u: string, p: string, t?: string): Promise<string>`
  <br>**Description:** Hashes a password.
- `dphelper.security.crypt(u: string, p: string, mode?: string): string`
  <br>**Description:** Encrypts data.
- `dphelper.security.deCrypt(u: string, p: string, mode?: string): string`
  <br>**Description:** Decrypts data.
- `dphelper.security.AES_KeyGen(passKey?: string): string`
  <br>**Description:** Generates an AES key.
- `dphelper.security.SHA256_Hex(passKey: string): string`
  <br>**Description:** Generates a SHA256 hash.

### Shortcut
- `dphelper.shortcut.keys(e: any, trigger: any): void`
  <br>**Description:** Adds a keyboard shortcut.

### Socket
- `dphelper.socket.info(): string`
  <br>**Description:** Gets socket information.
- `dphelper.socket.start(element: any, server: any): void`
  <br>**Description:** Starts a socket connection.
- `dphelper.socket.conn(id: any, server: any): [WebSocket, any]`
  <br>**Description:** Connects to a socket server.
- `dphelper.socket.connect(server: any): void`
  <br>**Description:** Connects to a server.
- `dphelper.socket.open(id: any, server: any): void`
  <br>**Description:** Opens a socket connection.
- `dphelper.socket.send(mex: any, type?: string): void`
  <br>**Description:** Sends a message through a socket.
- `dphelper.socket.ping(): void`
  <br>**Description:** Sends a ping through a socket.
- `dphelper.socket.receive(el?: any): void`
  <br>**Description:** Receives a message through a socket.
- `dphelper.socket.keepAlive(): void`
  <br>**Description:** Keeps a socket connection alive.
- `dphelper.socket.check(): void`
  <br>**Description:** Checks the status of a socket connection.
- `dphelper.socket.list(): WebSocket[]`
  <br>**Description:** Lists all socket connections.

### SVG
- `dphelper.svg.init(container: HTMLElement, source1: [HTMLElement, string], source2: [HTMLElement, string], cb?: Function): void`
  <br>**Description:** Initializes an SVG container.
- `dphelper.svg.check(): boolean`
  <br>**Description:** Checks if SVG is supported.
- `dphelper.svg.update(rect1: HTMLElement, rect2: HTMLElement, cxn: HTMLElement): void`
  <br>**Description:** Updates an SVG element.
- `dphelper.svg.getCurve(p1: [number, number], p2: [number, number], dx: number): string`
  <br>**Description:** Gets a curve path between two points.
- `dphelper.svg.getIntersection(dx: number, dy: number, cx: number, cy: number, w: number, h: number): [number, number]`
  <br>**Description:** Gets the intersection point of a curve.
- `dphelper.svg.setConnector(source: HTMLElement, side: string): HTMLElement`
  <br>**Description:** Sets a connector for an SVG element.
- `dphelper.svg.removeConnection(container: HTMLElement): void`
  <br>**Description:** Removes a connection from an SVG container.
- `dphelper.svg.makeScrollable(svgContainer: HTMLElement, scrollContainer: HTMLElement, elm1: HTMLElement, elm2: HTMLElement, rect1: HTMLElement, rect2: HTMLElement): void`
  <br>**Description:** Makes an SVG container scrollable.
- `dphelper.svg.makeDraggable(evt: Event): void`
  <br>**Description:** Makes an SVG element draggable.
- `dphelper.svg.toggle(evt: Event, container: HTMLElement, source1: HTMLElement, source2: HTMLElement): void`
  <br>**Description:** Toggles an SVG element.
- `dphelper.svg.convert(options: ConvertOptions): string | void`
  <br>**Description:** Converts an SVG element.

### System
- `dphelper.svg.multiSplit(): any`
  <br>**Description:** Splits a string into multiple parts.

### Terminal
- `dphelper.terminal(): Terminal`
  <br>**Description:** Initializes a terminal.

### Text
- `dphelper.text.trim(s: string, c: string, b: number, e: number): string`
  <br>**Description:** Trims a string.
- `dphelper.text.capitalize(txt: string): string`
  <br>**Description:** Capitalizes a string.
- `dphelper.text.lower(txt: string): string`
  <br>**Description:** Converts a string to lowercase.
- `dphelper.text.upper(txt: string): string`
  <br>**Description:** Converts a string to uppercase.
- `dphelper.text.nl2br(str: string): string`
  <br>**Description:** Converts newlines to <br> tags.
- `dphelper.text.sanitize(str: string): string`
  <br>**Description:** Sanitizes a string.
- `dphelper.text.camelCase: { toSpace(string: string): string; toUnderscore(string: string): string }`
  <br>**Description:** Converts camelCase to space or underscore.
- `dphelper.text.fitContainer(el: string): void`
  <br>**Description:** Fits a text element to its container.

### Timer
- `dphelper.timer.sleep(ms: number): Promise<void>`
  <br>**Description:** Pauses execution for a specified time.
- `dphelper.timer.percentage(start: string, end: string): string`
  <br>**Description:** Calculates the percentage of time elapsed.

### Tools
- `dphelper.tools.getip(): Promise<void>`
  <br>**Description:** Gets the IP address.
- `dphelper.tools.byteSize(bytes: number): string`
  <br>**Description:** Converts bytes to a human-readable format.
- `dphelper.tools.zIndex(): number`
  <br>**Description:** Gets the z-index.
- `dphelper.tools.zeroToFalse(value: number): boolean | number`
  <br>**Description:** Converts zero to false.

### Translators
- `dphelper.translator.convertMatrixToScale(values: any): number`
  <br>**Description:** Converts a matrix to a scale.

### Trigger
- `dphelper.trigger.click(elem: string): void`
  <br>**Description:** Triggers a click event.
- `dphelper.trigger.change(elem: string): void`
  <br>**Description:** Triggers a change event.
- `dphelper.trigger.input(elem: string): void`
  <br>**Description:** Triggers an input event.

### Type
- `dphelper.type.of(p: any): string`
  <br>**Description:** Gets the type of a value.
- `dphelper.type.instOfObj(p: any): boolean`
  <br>**Description:** Checks if a value is an instance of an object.
- `dphelper.type.isNull(p: any): (i: any) => boolean`
  <br>**Description:** Checks if a value is null.
- `dphelper.type.isBool(val: any): boolean`
  <br>**Description:** Checks if a value is a boolean.

### UI
- `dphelper.ui: null`
  <br>**Description:** User interface operations.

### Window
- `dphelper.window.enhancement(): void`
  <br>**Description:** Enhances the window.
- `dphelper.window.animationframe(): any`
  <br>**Description:** Gets the animation frame.
- `dphelper.window.center(params: { url: string; title: string; name: string; w: number; h: number }): void`
  <br>**Description:** Centers a window.
- `dphelper.window.onBeforeUnLoad(e: any): void`
  <br>**Description:** Handles the before unload event.
- `dphelper.window.purge(d?: Document, time?: number): void`
  <br>**Description:** Purges the document.
- `dphelper.window.stopZoomWheel(e: any): void`
  <br>**Description:** Stops the zoom wheel.
- `dphelper.window.setZoom(element?: string, zoom?: number): string`
  <br>**Description:** Sets the zoom level.
- `dphelper.window.getZoom(element?: string): number`
  <br>**Description:** Gets the zoom level.

## License
This project is licensed under the MIT License.
