import ITax from '../interface/ITax';

class ProductRepository {
  async getLastTax(): Promise<ITax> {
    return {value: 111, createdAt: new Date(), updatedAt: new Date()}
  }
}

export default ProductRepository;