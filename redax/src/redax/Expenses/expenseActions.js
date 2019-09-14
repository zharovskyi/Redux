export const Type = {
    ADDEXPENSE: 'ADDEXPENSE',
    REMOVEEXPENSE: 'REMOVEEXPENSE',
};

export const addExpense = value => ({
    type: Type.ADDEXPENSE,
    payload: value,
});

export const removeExpense = value => ({
    type: Type.REMOVEEXPENSE,
    payload: 0,
});