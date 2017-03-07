'use strict';

import * as TYPES from '../action/types.js';

const initialState = {
    weather:{
        temperature:"加载中",
        city:"加载中",
        airpollution:"加载中"
    },
    day:"加载中",
    time:"加载中"
}

export default function system(state = initialState, action) {
    switch(action.type) {
        case TYPES.WEATHER:
            state.weather = action.weather;
            return {
                ...state,
            };
        case TYPES.DAY:
            state.day = action.day;
            return {
                ...state,
            };
        case TYPES.TIME:
            state.time = action.time;
            return {
                ...state,
            };
        default:
            return state;
    }
}

