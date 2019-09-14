import { Type } from './budjetActions';

export const budjetReducer = (prevState = 0, action) => {
    switch (action.type) {
        case Type.SAVEBUDGET:
            return action.payload;
        default:
            return prevState;
    }

}