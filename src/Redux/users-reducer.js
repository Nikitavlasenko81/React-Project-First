import {FollowUnfollowAPI, UserAPI} from "../api/api";
import {updateOdjectInArray} from "../utils/object-helpers";

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
                users: updateOdjectInArray(state.users, action.userId,"id",{followed: true} )
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true}
                //     }
                //     return user;
                // })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateOdjectInArray(state.users, action.userId,"id",{followed: false} )
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false}
                //     }
                //     return user;
                // })
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

export function requestUsers(page,pageSize) {
    return (dispatch)=>{
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        UserAPI.getUsers(page,pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}
const followUnfollowFolw = async (dispatch, userId, apiMethod, actionCreator)=>{
        dispatch(toggleFollowingProgress(true));
        let data = await apiMethod(userId)

                if(data.resultCode === 0 ){
                    dispatch(actionCreator(userId));
                }
                dispatch(toggleFollowingProgress(false));

}
export function follow(userId) {
    return (dispatch)=>{
        return followUnfollowFolw(dispatch, userId, FollowUnfollowAPI.follow.bind(FollowUnfollowAPI), followSuccess )
    }
}
export function unfollow(userId) {
    return (dispatch)=>{
        return followUnfollowFolw(dispatch, userId, FollowUnfollowAPI.unfollow.bind(FollowUnfollowAPI), unfollowSuccess )
    }
}


export default usersReducer;