# dpHelper Store

## Overview
This document provides a comprehensive list of all available store functions in the `dphelper` library along with their descriptions and examples.

## Functions

### get
- **Description:** Retrieve an item from local storage.
- **Parameters:**
  - `name` (string): The name of the item to retrieve.
- **Example:**
  ```javascript
  const value = store.get('itemName');
  console.log(value);
  ```

### set
- **Description:** Set an item in local storage.
- **Parameters:**
  - `name` (string): The name of the item to set.
  - `value` (any): The value of the item to set.
- **Example:**
  ```javascript
  store.set('itemName', value);
  ```

### delete
- **Description:** Delete an item from local storage.
- **Parameters:**
  - `name` (string): The name of the item to delete.
- **Example:**
  ```javascript
  store.delete('itemName');
  ```

### clearAll
- **Description:** Clear all items from local storage.
- **Parameters:** None
- **Example:**
  ```javascript
  store.clearAll();
  ```

### quota
- **Description:** Estimate the storage quota and usage.
- **Parameters:** None
- **Example:**
  ```javascript
  const quota = store.quota();
  console.log(quota);
  ```

### size
- **Description:** Calculate the total size of all items in local storage.
- **Parameters:** None
- **Example:**
  ```javascript
  const totalSize = store.size();
  console.log(totalSize);
  ```

## License
This project is licensed under the MIT License.
