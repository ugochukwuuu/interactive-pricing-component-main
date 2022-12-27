// selectors
const toggle = document.querySelector(".toggle-container");
const toggleBall = document.querySelector(".toggle-ball");
const slider = document.querySelector(".slider");
const price = document.querySelector(".actual-price");
const mobilePrice = document.querySelector(".mobile-actual-price");
const pageviewsAmount = document.querySelector(".pageviews-amount");
const perDisplay = document.querySelector(".per-display");
const mobilePerDisplay = document.querySelector(".moile-per-display");

var count = 1;
toggle.addEventListener("click", () => {
  count += 1;
  console.log(count);
  if (count % 2 == 0) {
    toggle.classList.add("toggled");
    toggleBall.classList.add("toggled");
    price.classList.add("highlighted");

    perDisplay.textContent = "/ year";
  } else {
    toggle.classList.remove("toggled");
    toggleBall.classList.remove("toggled");
    price.classList.remove("highlighted");

    perDisplay.textContent = "/ month";
  }
});

var pricesArray = [
  {
    index: 2,
    pageviews: "10K",
    price: 8,
  },
  {
    index: 4,
    pageviews: "50K",
    price: 12,
  },
  {
    index: 6,
    pageviews: "100K",
    price: 16,
  },
  {
    index: 8,
    pageviews: "500K",
    price: 24,
  },
  {
    index: 10,
    pageviews: "1M",
    price: 36,
  },
];

let discountPriceArray = pricesArray.map((element) => {
  var yearlyPrice = 12 * element.price;
  var discount = yearlyPrice - (25 / 100) * yearlyPrice;
  return discount;
});

slider.addEventListener("input", () => {
  for (let i = 0; i <= pricesArray.length; i++) {
    if (pricesArray[i].index == slider.value) {
      pageviewsAmount.textContent = pricesArray[i].pageviews;
      if (count % 2 == 0) {
        price.textContent = `$${discountPriceArray[i]}.00`;
        mobilePrice.textContent = `$${discountPriceArray[i]}.00`;
      } else {
        price.textContent = `$${pricesArray[i].price}.00`;
        mobilePrice.textContent = `$${pricesArray[i].price}.00`;
      }
    }
  }
});

function initialize() {
  for (let i = 0; i <= pricesArray.length; i++) {
    if (pricesArray[i].index == slider.value) {
      pageviewsAmount.textContent = pricesArray[i].pageviews;
      if (count % 2 == 0) {
        price.textContent = `$${discountPriceArray[i]}.00`;
      } else {
        price.textContent = `$${pricesArray[i].price}.00`;
      }
    }
  }
}
