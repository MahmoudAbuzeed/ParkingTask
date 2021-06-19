import IParkTax from "./IParkTax";
import { Taxes } from "./Taxes";

export default class HighwayWelcomeTax implements IParkTax {
  calculateTax(currentTax: number): number {
    let newTax = currentTax + Taxes.WelcomeCost;
    return newTax;
  }
}
