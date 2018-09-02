import React, { Component } from 'react';
// import { connect } from 'react-redux'
import BudgetInput from '../components/budget/BudgetInput'


class BudgetContainer extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      income: '',
      housing_cost: '',
      food: '',
      credit_cards: '',
      car_loan: '',
      personal_loan: '',
      savings: '',
      miscellaneous: ''
    }
  }
  // componentDidMount()  {
  //    fetch('/api/v1/budgets.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         budget: data.budget
  //       })
  //     });
  //   }
  handleChange = event => {
    console.log("change handled")
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("event submitted")
  }

  render() {
    return (
      <div className="budgetContainer">
      {/*  {this.state.budget.map((budget) => budget.income)} */}
      <BudgetInput handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    )
  }
}
export default BudgetContainer;
