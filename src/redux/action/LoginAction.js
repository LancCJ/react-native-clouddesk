'use strict';

import * as TYPES from './types.js';

export function login(username,userpwd) {
  return (dispatch)=>{
      dispatch({
          type: TYPES.LOGINING,
          user:{
              isLogin:false,
              loginState:"logining"
          }
      })

      dispatch({
          type: TYPES.LOGINED,
          user:{
              isLogin:false,
              loginState:"logined"
          }
      })
  }
}




