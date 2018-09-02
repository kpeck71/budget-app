import React, { Component } from 'react';

const BudgetInput = props => {
  return (

  <div className="BudgetInput">
    <h1>Here is where my Budget form will go</h1>

    <form>
      <input type="number" name="income" value={this.props.income} placeholder="Monthly Income" />
      <input type="number" name="expenses" value={this.props.expenses} placeholder="Expense" />
      <input type="number" name="expenses" value={this.props.expenses} placeholder="Expense" />
      <input type="number" name="expenses" value={this.props.expenses} placeholder="Expense" />
      <input type="submit" />
    </form>

  </div>

  )

}

export default BudgetInput
