let INITIAL_STATE = {
    loading: false,
    data: {},
    error: ""
}
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            }

        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                data: action.payload,
            }

        case "FETCH_DATA_FAILED":
            return {
                ...state,
                error: action.payload,
            }

        default:
            break;
    }
}