export default interface IParkTax {
  calculateTax(currentTax: number, step: string): number;
}
