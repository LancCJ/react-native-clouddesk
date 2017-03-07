'use strict';

import * as TYPES from './types.js';
import MOMENT from '../../utils/moment'

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

function sWeek(){
    var sWeek=MOMENT().format('dddd');
    switch (sWeek){
        case 'Monday': sWeek='星期一';
            break;
        case 'Tuesday': sWeek='星期二';
            break;
        case 'Wednesday': sWeek='星期三';
            break;
        case 'Thursday': sWeek='星期四';
            break;
        case 'Friday': sWeek='星期五';
            break;
        case 'Saturday': sWeek='星期六';
            break;
        case 'Sunday': sWeek='星期日';
            break;
        default:
            break;
    }
    return sWeek;
}

export function day() {

    return {
        type: TYPES.DAY,
        day:MOMENT().format('YYYY年MM月DD日 ')+sWeek()
    };
}


export function time() {

    return {
        type: TYPES.TIME,
        time:MOMENT().format('hh:mm:ss')
    };
}



