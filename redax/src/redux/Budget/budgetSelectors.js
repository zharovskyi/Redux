export const getBudget = store => Number(store.budget);

export const getExpenses = store => store.expenses;

export const totalExpenses = store => {
    const expenses = getExpenses(store);
    return expenses.reduce((total, exp) => total + Number(exp.amount), 0);
};

export const getBalance = store => {
    const budget = getBudget(store);
    const expenses = totalExpenses(store);
    return Number(budget) - Number(expenses);
};

export const getExpensesLength = store => getExpenses(store).length;