'use strict';

import { combineReducers } from 'redux';
import { weather,day,time} from './reducers.js';

export default combineReducers({
  weatherStore: weather,
  dayStore: day,
  timeStore: time
});
