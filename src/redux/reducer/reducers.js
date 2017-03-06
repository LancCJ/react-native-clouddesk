'use strict';

import * as TYPES from '../action/types.js';

const initialWeather = {
    weather:{
        temperature:"加载中",
        city:"加载中",
        airpollution:"加载中"
    }
}

export function weather(state = initialWeather, action) {
    switch(action.type) {
        case TYPES.WEATHER:
            state.weather = action.weather;
            return {
                ...state,
            };
        default:
            return state;
    }
}

