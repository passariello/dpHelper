# dpHelper State

## Overview
This document provides a comprehensive list of all available state functions in the `dphelper` library along with their descriptions and examples.

## Functions

### state
- **Description:** Set and get state values.
- **Example:**
  ```javascript
  // To set a state value
  state.name = 'value';

  // To get a state value
  const value = state.name;
  ```

### list
- **Description:** Show all states out of proxy.
- **Example:**
  ```javascript
  state.list;
  ```

### remove
- **Description:** Remove a state.
- **Parameters:**
  - `name` (string): The name of the state to remove.
- **Example:**
  ```javascript
  state.remove('stateName');
  ```

## License
This project is licensed under the MIT License.