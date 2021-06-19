import IParkTax from "./IParkTax";
import { Taxes } from "./Taxes";
import GateLimit from "./GateLimit";

export default class GateTax implements IParkTax {
  calculateTax(currentTax: number): number {
    let newTax = currentTax + Taxes.GateCost;
    return newTax;
  }
}
