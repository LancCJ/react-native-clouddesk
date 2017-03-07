'use strict';

import * as TYPES from '../action/types.js';

const initialState = {
    user:{
        isLogin:false,
        loginState:"login",
        loginMsg:'',
    }
}

export default  function login(state = initialState, action) {
    switch(action.type) {
        case TYPES.LOGINING:
            state.user = action.user;
            return {
                ...state,
            };
        case TYPES.LOGINED:
            state.user = action.user;
            return {
                ...state,
            };
        default:
            return state;
    }
}
