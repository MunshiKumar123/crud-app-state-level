import { FORM_DATA, GET_DATA, UPDATE_DATA } from '../type/type'
import { toast } from 'react-toastify';

export const formData = ({ prop, value }) => {
    return {
        type: FORM_DATA,
        payload: { prop, value },
    };
};

export const getData = (value) => {
    return {
        type: GET_DATA,
        payload: value,
    };
};

export const updateData = (data) => {
    return {
        type: UPDATE_DATA,
        payload: data,
    };
};
