import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onClick = (id) => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
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
  removeExpense: (id) => dispatch(removeExpense(id)),
  editExpense: (id, expense) => dispatch(editExpense(id, expense))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
