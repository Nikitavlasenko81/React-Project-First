import * as axios from "axios";

const axiosInstans = axios.create ({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY" : "c05f61ef-80c8-4f42-b591-72ab0658de12",
    },

})
export const UserAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return axiosInstans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data;
            })
    }
}
export const FollowUnfollowAPI = {
    follow(id) {
        return axiosInstans.post(`follow/${id}`)
            .then(response =>{
                return response.data;
            })
    },
    unfollow(id) {
        return axiosInstans.delete(`follow/${id}`)
            .then(response =>{
                return response.data;
            })
    }
}
export const AuthAPI = {
    auth(){
        return axiosInstans.get('auth/me')
            .then(response =>{
                return response.data;
            })
    }
}
export const ProfileAPI = {
    profile(id){
        return axiosInstans.get(`profile/${id}`)
    }
}



