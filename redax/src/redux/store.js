import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { budjetReducer, expensesReducer } from './Budget/budgetReducers';

const rootReducer = combineReducers({
    budget: budjetReducer,
    expenses: expensesReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;