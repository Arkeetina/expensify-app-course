import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense actions object', () => {
  const action = removeExpense({id: '1234'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('1234', {note: 'New update'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      note: 'New update'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was the rent'
  }

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});


test('should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});