import { FORM_DATA, GET_DATA, UPDATE_DATA } from "../type/type"

const INITIAL_STATE = {
    email: '',
    name: "",
    data: []
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FORM_DATA:
            return {
                ...state, [action.payload.prop]: action.payload.value
            }
        case GET_DATA:
            return {
                ...state, data: [...state.data, action.payload]
            }

        case UPDATE_DATA:
            return {
                ...state, data: action.payload
            }

        default:
            return state
    }

}
