import { useContext } from 'react';
import React from 'react';
import { GlobalContext } from '../context/Globalstate';

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  let incomeAmounts = [];
  let expenseAmounts = [];

  transactions.forEach(transaction => {
    if (transaction.amount > 0) {
      incomeAmounts.push(transaction.amount);
    } else if (transaction.amount < 0) {
      expenseAmounts.push(transaction.amount);
    }
  });

  const totalIncome = incomeAmounts.reduce((acc, item) => acc + item, 0);
  const totalExpense = expenseAmounts.reduce((acc, item) => acc + item, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{Math.abs(totalExpense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
