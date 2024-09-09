const Product = require("./Product");

class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
      this.total += product.price;
    }
  }

  removeProduct(product) {
    if (product >= 0 && product < this.products.length) {
     const productToRemove = this.products[product];
     this.products.splice(product,1)
     this.total-= productToRemove.price
      } 
}
}

module.exports = Cart;
