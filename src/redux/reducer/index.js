'use strict';

import { combineReducers } from 'redux';
import { weather} from './reducers.js';

export default combineReducers({
  weather: weather
});
