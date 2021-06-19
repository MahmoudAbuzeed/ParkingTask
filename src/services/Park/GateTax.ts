import IParkTax from "./IParkTax";
import { Taxes } from "./Taxes";
import GateLimit from "./GateLimit";

export default class GateTax implements IParkTax {
  calculateTax(currentTax: number): number {
    // if(!GateLimit.isEmployeePassedLimit) return;

    const newTax = currentTax + Taxes.GATE;
    /**
     * TODO:
     * 1- add new Taxes Related to This Card
     */
    return newTax;
  }
}
