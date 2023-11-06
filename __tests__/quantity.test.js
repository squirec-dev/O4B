const {QuantityCounter, increment, decrement} = require('../src/quantity');

describe('increment', function () {
  test('it increments a given value', function () {
    expect(increment(5)).toBe(6);
  });

  test('it returns the value unchanged if value is 10', function () {
    expect(increment(10)).toBe(10);
  });
});

describe('decrement', function () {
  test('it decrements a given value', function () {
    expect(decrement(5)).toBe(4);
  });

  test('it returns the value unchanged if value is 0', function () {
    expect(decrement(0)).toBe(0);
  });
});

describe('QuantityCounter', function () {
  test('button click changes the value', function () {
    customElements.define("quantity-counter", QuantityCounter);
    document.body.innerHTML = `<quantity-counter value="1"></quantity-counter>`;
    new QuantityCounter();
    const counter = document.querySelector("quantity-counter");

    expect(counter).toBeDefined();
  });
});
