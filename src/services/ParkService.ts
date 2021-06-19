import ParkRepository from "../repository/ParkRepository";
import { Step } from "./Employee/Step";
import GateTax from "./Park/GateTax";
import HighwayWelcomeTax from "./Park/HighwayWelcomeTax";
import TaxStrategy from "./Park/TaxStrategy";

export default class ParkService {
  private taxStrategy: TaxStrategy;
  private parkRepository: ParkRepository;

  constructor() {
    this.taxStrategy = new TaxStrategy(new HighwayWelcomeTax());
    this.parkRepository = new ParkRepository();
  }

  async addTax(step: string) {
    const lastTax = await this.parkRepository.getLastTax();
    switch (step) {
      case Step.WELCOME:
        this.taxStrategy.setTaxStrategy(new HighwayWelcomeTax());
        break;
      case Step.PASS_GATE:
        this.taxStrategy.setTaxStrategy(new GateTax());
        break;
      default:
        break;
    }
    return this.taxStrategy.calculateTax(lastTax.value);
  }
}
