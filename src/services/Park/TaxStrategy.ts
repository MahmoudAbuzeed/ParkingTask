import IParkTax from "./IParkTax";

export default class TaxStrategy {
  private taxStrategy: IParkTax;

  constructor(taxStrategy: IParkTax) {
    this.taxStrategy = taxStrategy;
  }

  setTaxStrategy(taxStrategy: IParkTax) {
    this.taxStrategy = taxStrategy;
  }

  calculateTax(currentTax: number) {
    return this.taxStrategy.calculateTax(currentTax);
  }
}
