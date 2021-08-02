import firebase from "firebase"

import {manageUserConstant} from "./constants"

export const getUsersData = () =>{
    return async (dispatch) =>{
        const db = firebase.firestore()

        dispatch({
            type:manageUserConstant.GET_USERS_REQUEST
        })

        db.collection('users').get().then((queryData)=>{
            let data = [];

            queryData.forEach((doc)=>{
                data.push(doc.data());
            })
            localStorage.setItem('users', JSON.stringify(data))

            dispatch({
                type: manageUserConstant.GET_USERS_SUCCESS,
              });

        }).catch((e)=>{
            dispatch({
                type: manageUserConstant.GET_USERS_FAILED,
                payload: e
            })
        })
    }
}

