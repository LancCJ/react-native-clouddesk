'use strict';

import * as TYPES from './types.js';

export function weather() {
  return {
      type: TYPES.WEATHER,
      weather:{
          temperature:"17°",
          city:"苏州",
          airpollution:"轻度污染"
      }
  };
}


