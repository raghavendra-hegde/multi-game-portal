import { combineReducers } from 'redux';
import siteModal from './siteModal';
const rootReducer = combineReducers({
    siteModal : siteModal
}) 
export default rootReducer;