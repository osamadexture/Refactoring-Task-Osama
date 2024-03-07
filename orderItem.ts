import Item from './item';

class OrderItem {
  protected orderItems: Item[];

  constructor() {
    this.orderItems = [];
  }

  protected getPriceForItem(item: Item) {
    return item.price;
  }
}

export default OrderItem;
