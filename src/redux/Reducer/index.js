import { combineReducers } from "redux"

import CrudReducer from "./CrudReducer";

const reducers = combineReducers({
    crud: CrudReducer,
});

export default reducers;