import React, { Component } from 'react';
import styled from 'styled-components';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Value';
import { connect } from 'react-redux';
import * as budgetSelectors from '../redux/Budget/budgetSelectors';
import * as budgetActions from '../redux/Budget/budgetActions';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

// const calculateTotalExpenses = expenses => {
//   return expenses.reduce((total, expense) => total + expense.amount, 0);
// };

const App = ({ budget, expenses, balance, expensesLength, totalExpenses, saveBudget, addExpense, removeExpense }) => {

  return (
    <Container>
      <BudgetForm onSave={saveBudget} />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm onSave={addExpense} />
      {expensesLength > 0 && (
        <ExpensesTable items={expenses} onRemove={removeExpense} />
      )}
    </Container>
  );
}
const MSTP = store => ({
  budget: budgetSelectors.getBudget(store),
  totalExpenses: budgetSelectors.totalExpenses(store),
  expenses: budgetSelectors.getExpenses(store),
  balance: budgetSelectors.getBalance(store),
  expensesLength: budgetSelectors.getExpensesLength(store),
})

const MDTP = dispatch => ({
  saveBudget: (budget) => dispatch(budgetActions.saveBudget(budget)),
  addExpense: obj => dispatch(budgetActions.addExpense(obj)),
  removeExpense: id => dispatch(budgetActions.removeExpense(id))
})

export default connect(MSTP, MDTP)(App);



