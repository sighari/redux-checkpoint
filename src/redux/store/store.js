import {createStore} from "redux"; 
import todoRoducer from "../reducers/todoRoducer";
export default createStore(todoRoducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())