import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { budjetReducer } from './Budget/budjetReducers';
import { expenseReducer } from './Expenses/expenseReducers';

const rootReducer = combineReducers({
    budget: budjetReducer,
    expences: expenseReducer,
});

const store = createStore(rootReducer, 0, devToolsEnhancer());

export default store;