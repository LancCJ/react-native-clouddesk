'use strict';

/**LoginPage登录页**/
import  login from './LoginReducer';
/**HomePage首页**/
import  system from './SystemReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    /**LoginPage登录页**/
    loginStore:login,
    /**HomePage首页**/
    systemStore: system,
});
