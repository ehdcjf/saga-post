export const initalState = {
    posts:[],
    postDetail:null,
    loadding:false,
}

/* REDUX ACTIONS */
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const GET_POSTS_FAIL = "GET_POSTS_FAIL"

export const GET_POST_DETAIL_REQUEST = "GET_POSTS_DETAIL_REQUEST"
export const GET_POST_DETAIL_SUCCESS = "GET_POSTS_DETAIL_SUCCESS"
export const GET_POST_DETAIL_FAIL = "GET_POSTS_DETAIL_FAIL"

export const GET_POST = () => {
    return {
        type:GET_POSTS_REQUEST
    }
}

export const GET_POST_DETAIL = (data) =>{
    return {
        type:GET_POST_DETAIL_REQUEST,
        data,
    }
}

const reducer = (state = initalState,action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loadding:true
            }
        case GET_POSTS_SUCCESS:
            console.log('xxx')
            return {
                ...state,
                posts:[...state.posts,...action.data],
                loadding:false,
            }
        case GET_POSTS_FAIL:
            return {
                ...state,
                loadding:false,
            }
        case GET_POST_DETAIL_REQUEST:
            return {
                ...state,
                loadding:true
            }
        case GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                postDetail:action.data,
                loadding:false,
            }
        case GET_POST_DETAIL_FAIL:
            return {
                ...state,
                loadding:false,
            }
        default:
            return state
    }
}

export default reducer