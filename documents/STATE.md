# dpHelper State

## Overview
This document provides a comprehensive list of all available state functions in the `dphelper` library along with their descriptions and examples.

### News :)
Now if you try to override the root state you get a message error!
Also, now you can lock a state using example: __state.[stateName].lock()__

## Functions

### state.[state.name] ex: _state.test_
- **Description:** Set and get state values.
- **Example:**
  ```javascript
  // To set a state value
  state.name = 'value';

  // To get a state value
  const value = state.name;
  ```

### state.list
- **Description:** Show all states out of proxy.
- **Example:**
  ```javascript
  state.list;
  ```

### state.remove([state.name])
- **Description:** Remove a state.
- **Parameters:**
  - `name` (string): The name of the state to remove.
- **Example:**
  ```javascript
  state.remove('stateName');
  ```

### state.name.lock()

>>> New option!
- **Description:** Lock a state.
- **Example:**
  ```javascript
  state.name = {test:"test"}
  state.name.lock();
  "Now you can't add more data or remove it"
  ```

## License
This project is licensed under the MIT License.
