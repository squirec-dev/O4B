function decrement(value) {
  const number = Number(value);

  if (number === 0) {
    return number;
  }

  return number - 1
}

function increment(value) {
  const number = Number(value);

  if (number === 10) {
    return number;
  }
  
  return number + 1
}

class QuantityCounter extends HTMLElement {
  static observedAttributes = ["value"];


  constructor() {
    super();

    this.value = 1
  }

  // attributeChangedCallback(_name, _oldValue, newValue) {
  //   console.log(newValue)
  // }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create a wrapper with inc/ dec buttons and a label displaying the value
    const wrapper = document.createElement("div");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");
    const quantityLabel = document.createElement("span");

    incrementButton.textContent = "+";
    decrementButton.textContent = "-";
    quantityLabel.textContent = this.value;

    wrapper.appendChild(decrementButton)
    wrapper.appendChild(quantityLabel)
    wrapper.appendChild(incrementButton)

    // Add to shadow root
    shadow.appendChild(wrapper)

    // Add event listeners to buttons
    incrementButton.addEventListener("click", () => {
      const increasedValue = increment(this.value)
      this.value = increasedValue
      // console.log("new value", this.value)
      quantityLabel.textContent = this.value;
    })

    decrementButton.addEventListener("click", () => {
      const decreasedValue = decrement(this.value)
      this.value = decreasedValue
      // console.log("new value", this.value)
      quantityLabel.textContent = this.value;
    })

  }
}

module.exports = {
  QuantityCounter,
  increment,
  decrement
};
