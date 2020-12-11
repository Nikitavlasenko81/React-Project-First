let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 19,
    currentPage: 1,
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
        default:
            return state
    }
}

export function followActionCreator(userId) {
    return {
        type: "FOLLOW",
        userId
    }
}

export function unfollowActionCreator(userId) {
    return {
        type: "UNFOLLOW",
        userId
    }
}

export function setUsersActionCreator(users) {
    return {
        type: "SET_USERS",
        users
    }
}

export function setCurrentPageActionCreator(currentPage) {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    }
}

export function setTotalUsersCountActionCreator(totalCount) {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalCount
    }
}


export default usersReducer;