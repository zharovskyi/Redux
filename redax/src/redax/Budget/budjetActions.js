export const Type = {
    SAVEBUDGET: 'SAVEBUDGET',
};

export const saveBudget = value => ({
    type: Type.SAVEBUDGET,
    payload: value,
});


