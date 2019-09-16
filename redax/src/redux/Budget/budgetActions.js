export const Type = {
    SAVE_BUDGET: 'SAVE_BUDGET',
    ADD_EXPENSE: 'ADD_EXPENSE',
    REMOVE_EXPENSE: 'REMOVE_EXPENSE',
}

export const saveBudget = budget => ({
    type: Type.SAVE_BUDGET,
    payload: {
        budget: budget
    },
});

export const addExpense = expenseObject => ({
    type: Type.ADD_EXPENSE,
    payload: {
        expenseObject: expenseObject,
    },
});

export const removeExpense = id => ({
    type: Type.REMOVE_EXPENSE,
    payload: {
        id: id,
    },
});
