import React, { Component } from 'react';

const BudgetInput = props => {
  return (

    <div className="BudgetInput">
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="income" value={props.income } placeholder="Monthly Income" onChange={props.handleChange} />
        <input type="text" name="housing_cost" value={props.housing_cost } placeholder="Housing Costs" onChange={props.handleChange} />
        <input type="text" name="food" value={props.food } placeholder="Food" onChange={props.handleChange} />
        <input type="text" name="credit_cards" value={props.credit_cards } placeholder="Credit Cards" onChange={props.handleChange} />
        <input type="text" name="car_loan" value={props.car_loan } placeholder="Car Loans" onChange={props.handleChange} />
        <input type="text" name="personal_loan" value={props.personal_loan } placeholder="Personal Loans" onChange={props.handleChange} />
        <input type="text" name="savings" value={props.savings } placeholder="Savings" onChange={props.handleChange} />
        <input type="text" name="miscellaneous" value={props.miscellaneous } placeholder="Miscellaneous" onChange={props.handleChange} />
        <input type="submit" />
      </form>
    </div>

  )

}

export default BudgetInput
