import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onClick = (id) => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <button onClick={this.onClick}>Remove</button>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
