const Product = require("./Product");

class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product, quantity) {
    if (quantity > product.quantity) {
      return `I'm sorry there are only ${product.quantity} of this product left`;
    }
    if (product instanceof Product) {
      this.products.push(product);
      this.total += product.price * quantity;
      product.quantity -= quantity;
      if (product.quantity == 0) {
        product.inStock = false;
      }
    }
    return product
  }

  removeProduct(product) {
    if (product >= 0 && product < this.products.length) {
      const productToRemove = this.products[product];
      this.products.splice(product, 1);
      this.total -= productToRemove.price;
    }
  }

  getTotal() {
    for (const product of this.products) {
      this.total += product.price;
    }
    return this.total;
  }

  clear() {
    let productSize = this.products.length;
    this.products.splice(0, productSize);
    this.total = 0;
  }
  removeItemByName(productName) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name == productName) {
        this.products.splice(i, 1);
        break;
      }
    }
  }
}

module.exports = Cart;
