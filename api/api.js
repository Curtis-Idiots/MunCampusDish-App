const axios = require('axios')

// { Menu: { MenuProducts: [ { Product: { MarketingName: "x", description: "y"} }, { }, { }] }}
const BREAKFAST_DATA = [
  {
    name: "Eggs",
    description: "Whatever"
  },
  {
    name: "Waffles",
    description: "Whatever"
  }
]

const LUNCH_DATA = [
  {
    name: "Chicken",
    description: "Whatever"
  },
  {
    name: "Gravy",
    description: "Whatever"
  }
]

const DINNER_DATA = [
  {
    name: "Beef",
    description: "Whatever"
  },
  {
    name: "Pizza",
    description: "Whatever"
  }
]

exports.getBreakfast = (error) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BREAKFAST_DATA)
    }, 300);
  });
}

exports.getLunch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(LUNCH_DATA)
    }, 300);
  });
}

exports.getDinner = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DINNER_DATA)
    }, 300);
  });
}
