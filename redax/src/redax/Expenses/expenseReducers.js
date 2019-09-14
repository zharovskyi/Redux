import { Type } from './expenseActions';

export const expenseReducer = (prevState = [], action) => {
    switch (action.type) {
        case Type.ADDEXPENSE:
            return action.payload;

        case Type.REMOVEEXPENSE:
            return action.payload;

        default:
            return prevState;
    }

}