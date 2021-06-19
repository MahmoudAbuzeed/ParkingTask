import IParkTax from "./IParkTax";
import { Taxes } from "./Taxes";

export default class HighwayWelcomeTax implements IParkTax {
  calculateTax(currentTax: number): number {
    const newTax = currentTax + Taxes.WELCOME;
    /**
     * TODO:
     * 1- add new Taxes Related to This Card
     * 2- Final Taxes
     */
    return newTax;
  }
}
