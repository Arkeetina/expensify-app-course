import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
 

test('should render ExpensesSummary component correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary component correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={3333}/>);
  expect(wrapper).toMatchSnapshot();
});

