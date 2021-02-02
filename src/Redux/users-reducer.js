import {FollowUnfollowAPI, UserAPI} from "../api/api";

let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.totalCount}

        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

        case "TOGGLE_FOLLOWING_PROGRESS":
            return {...state, followingInProgress: action.isFetching}


        default:
            return state
    }
}
// Action Creators

export function followSuccess(userId) {
    return {
        type: "FOLLOW",
        userId
    }
}

export function unfollowSuccess(userId) {
    return {
        type: "UNFOLLOW",
        userId
    }
}

export function setUsers(users) {
    return {
        type: "SET_USERS",
        users
    }
}

export function setCurrentPage(currentPage) {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    }
}

export function setTotalUsersCount(totalCount) {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalCount
    }
}
export function toggleIsFetching(isFetching) {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }
}
export function toggleFollowingProgress(isFetching) {
    return {
        type: "TOGGLE_FOLLOWING_PROGRESS",
        isFetching
    }
}
// Thaunk Creators

export function getUsers(currentPage,pageSize) {
    return (dispatch)=>{
        dispatch(toggleIsFetching(true));
        UserAPI.getUsers(currentPage,pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export function follow(userId) {
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true));
        FollowUnfollowAPI.follow(userId)
            .then(data => {
                if(data.resultCode === 0 ){
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false));
            });
    }
}
export function unfollow(userId) {
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true));
        FollowUnfollowAPI.unfollow(userId)
            .then(data => {
                if(data.resultCode === 0 ){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false));
            });
    }
}


export default usersReducer;