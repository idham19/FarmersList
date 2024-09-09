const Cart = require("./Cart");

class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
    this.rewardPoints = 0;
  }
  addToOrderHistory(cart) {
    if (cart instanceof Cart) {
      this.orderHistory.push(cart);
    }
  }
  getRewardPoints() {
    this.rewardPoints=0
    for (let i = 0; i < this.orderHistory.length; i++) {
      this.rewardPoints += this.orderHistory[i].rewardPoints;
    }
    return this.rewardPoints;
  }
}

module.exports = Customer;
