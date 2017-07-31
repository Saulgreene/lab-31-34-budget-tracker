import uuid from 'uuid/v1';

export const expenseCreate = (expense) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    ...expense,
    id: uuid(),
    timestamp: new Date(),
  }
});

export const expenseInsert = (expense) => console.log('expense:\n',expense)
({
  type: 'EXPENSE_CREATE',
  payload: { ...expense } ,
});

export const expenseUpdate = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: {...expense},
});

export const expenseDelete = (expense) => {
  return {
    type: 'EXPENSE_DELETE',
    payload: {...expense},
  };
};

export const expenseReset = () => ({
  type: 'EXPENSE_RESET'
});