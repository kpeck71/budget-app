class Api::V1::BudgetsController < ApplicationController
  def index
    render json: Budget.all
  end

  def create
    budget = Budget.create(budget_params)
    render json: budget
  end

  def destroy
    Budget.destroy(params[:id])
  end

  def update
    budget = Budget.find(params[:id])
    budget.update_attributes(budget_params)
    render json: budget
  end

  private

  def budget_params
    params.require(:budget).permid(:id, :income, :expenses)
  end

end
