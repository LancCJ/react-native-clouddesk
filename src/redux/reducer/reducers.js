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


const initialDay = {
    day:"加载中"
}

export function day(state = initialDay, action) {
    switch(action.type) {
        case TYPES.DAY:
            state.day = action.day;
            return {
                ...state,
            };
        default:
            return state;
    }
}

const initialTime = {
    time:"加载中"
}


export function time(state = initialTime, action) {
    switch(action.type) {
        case TYPES.TIME:
            state.time = action.time;
            return {
                ...state,
            };
        default:
            return state;
    }
}