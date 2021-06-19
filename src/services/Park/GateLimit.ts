import { Limit } from './Taxes';
import ITax from '../../interface/ITax';

class GateLimit{
  isEmployeePassedLimit(lastTax: ITax){
    // const { updatedAt } = lastTax;
    /**
     * Compare UpdateAt Current Time >Limit.VALUE === return true
     */
    return true;
  }
}

export default new GateLimit();