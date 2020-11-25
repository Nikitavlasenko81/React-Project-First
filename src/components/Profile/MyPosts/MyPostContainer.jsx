import React from "react"
import MyPosts from "./MyPosts";
import {addPostActionCreator, apdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {addMassageActionCreator, apdateNewMassageTextActionCreator} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

// function MyPostContainer(props){
//     let state = props.store.getState();
//
//  function addPost(){
//         props.store.dispatch(addPostActionCreator());
//     }
//     function apdateNewPostText(text){
//     props.store.dispatch(apdateNewPostTextActionCreator(text))
//     }
//
//     return (
//         <div>
//             <MyPosts postData = {state.profilePage.postData} apdateNewPostText = {apdateNewPostText} addPost = {addPost} newPostText={state.profilePage.newPostText}/>
//         </div>
//     )
// }
//


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        apdateNewPostText: (text) => {
            dispatch(apdateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}
let newMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default newMyPostContainer