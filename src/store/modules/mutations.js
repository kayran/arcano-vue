import set from 'lodash.set';
import has from 'lodash.has';
import omit from 'lodash.omit';

function hasPropertyAndWith(payload) {
  return Object.prototype.hasOwnProperty.call(payload, 'property') &&
    Object.prototype.hasOwnProperty.call(payload, 'with');
}

function hasPropertyAndKeyAndWith(payload) {
  return Object.prototype.hasOwnProperty.call(payload, 'property') &&
    Object.prototype.hasOwnProperty.call(payload, 'key') &&
    Object.prototype.hasOwnProperty.call(payload, 'with');
}

function hasPropertyAndKey(payload) {
  return Object.prototype.hasOwnProperty.call(payload, 'property') &&
    Object.prototype.hasOwnProperty.call(payload, 'key');
}

function isNotObject(objectTarget) {
  return typeof objectTarget !== 'object';
}

/**
 * Override the property passed in the object
 * @param state: current state of the store
 * @param payload: array of object with "Property" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
export function mutate(state, payload) {
  if (!hasPropertyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property and with`);
  }

  set(state, payload.property, payload.with);
  return true;
}

/**
 * Override all the properties passed in the array of objects
 * @param state: current state of the store
 * @param payloads: array of object with "Property" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
export function mutateMultiple(state, payloads) {
  if (!Array.isArray(payloads)) {
    throw new Error(`${payloads} Must be an array`);
  }

  payloads.forEach((payload) => {
    if (!hasPropertyAndWith(payload)) {
      throw new Error(`${payload} Must have attributes property and with`);
    }
  });

  payloads.forEach((payload) => {
    set(state, payload.property, payload.with);
    return true;
  });
}

/**
 * Add or update a object in the store
 * @param state: current state of the store
 * @param payload: object with "Property", "Key" and "With"
 * @returns {boolean|Error}:  true if updated the object, false otherwise
 */
export function mutateObjectKey(state, payload) {
  if (isNotObject(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an object`);
  }

  if (!hasPropertyAndKeyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property, key and with`);
  }

  set(state, `${payload.property}.${payload.key}`, payload.with);
  return true;
}

/**
 * Remove a key in object
 * @param state: current state of the store
 * @param payload: object with "Property", "Key"
 * @returns {boolean|Error}:  true if removed the object, false otherwise
 */
export function mutateRemoveObjectKey(state, payload) {
  if (isNotObject(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an object`);
  }

  if (!hasPropertyAndKey(payload)) {
    throw new Error(`${payload} Must have attributes property and key`);
  }

  if (!has(state, `${payload.property}.${payload.key}`)) {
    return false;
  }

  state[payload.property] = omit(state[payload.property], `${payload.key}`);
  return true;
}

/**
 * Remove objects in array by a attribute
 * @param state: current state of the store
 * @param payload: object with "Property", "Key" and "With"
 * @returns {boolean|Error}:  true if removed the object, false otherwise
 */
export function mutateRemoveObjectsFromArrayByAttributeAndValue(state, payload) {
  if (isNotObject(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an object`);
  }

  if (!hasPropertyAndKeyAndWith(payload)) {
    throw new Error(`${payload} Must have attributes property and key`);
  }

  if (!Array.isArray(state[payload.property])) {
    throw new Error(`${state[payload.property]} Must be an array`);
  }

  const originalSizeOfProperty = state[payload.property].length;

  state[payload.property] = state[payload.property].filter(el => {
    const hasAttribute = payload.key in el;
    const isSameValue = el[payload.key] === payload.with;
    return !(hasAttribute && isSameValue);
  });

  const afterSizeOfProperty = state[payload.property].length;

  // If is different it means that removed the at least one object
  return originalSizeOfProperty !== afterSizeOfProperty;
}
