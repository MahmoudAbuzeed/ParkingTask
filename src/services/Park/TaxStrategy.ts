import IParkTax from "./IParkTax";

export default class TaxStrategy{
  private taskStrategy: IParkTax;

  setTaxStrategy(taskStrategy: IParkTax){
    this.taskStrategy = taskStrategy;
  }

  calculateTax(currentTax: number){
    return this.taskStrategy.calculateTax(currentTax);
  }
}