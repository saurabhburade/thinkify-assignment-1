import axios from "axios"
import { FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, LOADING } from "./actions"
export const fetchData = () => {
    return (dispatch) => {
        dispatch(loading(true))
        axios.get("https://jsonmock.hackerrank.com/api/articles").then(data => {
            if (data) {
                dispatch(fetchDataSuccess(data.data))
                dispatch(loading(false))

            } else {
                dispatch(fetchDataFailed("Failed to fetch data"))
                dispatch(loading(false))

            }
        }).catch(err => {
            dispatch(fetchDataFailed("Failed to fetch data"))
            dispatch(loading(false))

        })
    }
}


const fetchDataSuccess = (payload) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailed = (payload) => {
    return {
        type: FETCH_DATA_FAILED,
        payload
    }
}
const loading = (payload) => {
    return {
        type: LOADING,
        payload
    }
}