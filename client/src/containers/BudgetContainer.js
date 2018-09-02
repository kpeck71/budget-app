import React, { Component } from 'react';
// import { connect } from 'react-redux'
import BudgetInput from '../components/budget/BudgetInput'


class BudgetContainer extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      income: '',
      expenses: ''
    }
  }
  //
  // componentDidMount()  {
  //    fetch('/api/v1/budgets.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         budget: data.budget
  //       })
  //     });
  //   }


  render() {
    return (
      <div className="budgetContainer">
      {/*  {this.state.budget.map((budget) => budget.income)} */}
      <BudgetInput income={this.state.income} expenses={this.state.expenses} />
      </div>
    )
  }
}
export default BudgetContainer;
