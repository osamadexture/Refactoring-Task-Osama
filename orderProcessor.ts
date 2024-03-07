import OrderItem from './orderItem';

class OrderProcessor extends OrderItem {
  private customerName: string;
  private discount: number;
  private totalCost: number;

  constructor(customerName: string) {
    super();
    this.customerName = customerName;
    this.discount = 0;
    this.totalCost = 0;
  }

  private calculateTotalCost() {
    let total = 0;
    for (const item of this.orderItems) {
      const itemPrice = this.getPriceForItem(item);
      total += itemPrice;
    }

    return total;
  }

  private applyLoyaltyDiscount(totalCost: number) {
    const loyaltyDiscount = 0.1;
    if (this.customerName.startsWith("LOYAL")) {
      return totalCost * loyaltyDiscount;
    }

    return 0;
  }

  private formatOrderSummary() {
    const formattedItems = this.orderItems.map(item => item.name).join(", ");
    return `Order Summary for ${this.customerName}:
        Items: ${formattedItems}
        Discount: ${this.discount}
        Total Cost: ${this.totalCost}`;
  }

  public processOrder() {
    this.totalCost = this.calculateTotalCost();
    this.totalCost -= this.applyLoyaltyDiscount(this.totalCost);

    const formattedSummary = this.formatOrderSummary();
    console.log(formattedSummary);
  }
}

export default OrderProcessor;
