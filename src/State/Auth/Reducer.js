import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,FORGOT_PASS_REQUEST, FORGOT_PASS_FAILURE } from "./ActionType";

const intialState={
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}
export const authReducer=(state = intialState,action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case FORGOT_PASS_REQUEST:
            return {...state, isLoading:true, error:null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, isLoading:false, error:null, jwt:action.payload}

        case GET_USER_SUCCESS:
            return {...state, isLoading:false, error:null, user:action.payload}

        case FORGOT_PASS_FAILURE:    
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state, isLoading:false, error:action.payload}

        case LOGOUT:
            return{...intialState}

        default:
            return state;
    }
}
