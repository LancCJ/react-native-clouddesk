'use strict';

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import combineReducers from '../reducer/index.js';

const loggerMiddleware = createLogger();

export let store = createStore(
  combineReducers,
  applyMiddleware(
    loggerMiddleware,
  ),
);
