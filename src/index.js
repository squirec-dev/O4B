const {QuantityCounter} = require('./quantity');
console.log(QuantityCounter);
customElements.define("quantity-counter", QuantityCounter);
new QuantityCounter();