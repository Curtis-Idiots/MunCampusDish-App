import axios from "axios"
const BASE_URL = `https://mun.campusdish.com/api/menu/`

// { Menu: { MenuProducts: [ { Product: { MarketingName: "x", description: "y"} }, { }, { }] }}
const BREAKFAST_DATA = [
  {
    name: "Eggs",
    description: "Whatever",
  },
  {
    name: "Waffles",
    description: "Whatever",
  },
]

const LUNCH_DATA = [
  {
    name: "Chicken",
    description: "Whatever",
  },
  {
    name: "Gravy",
    description: "Whatever",
  },
]

const DINNER_DATA = [
  {
    name: "Beef",
    description: "Whatever",
  },
  {
    name: "Pizza",
    description: "Whatever",
  },
]

exports.getBreakfast = (error) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BREAKFAST_DATA)
    }, 300)
  })
}

exports.getLunch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(LUNCH_DATA)
    }, 300)
  })
}

exports.getDinner = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DINNER_DATA)
    }, 300)
  })
}
exports.fetchMenu = async (periodID) => {
  const date = new Date()
  const datestr = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`
  let response = await axios.get(
    BASE_URL +
      `GetMenus?locationId=6721&storeIds=&mode=Daily&date=${datestr}&time=&periodId=${periodID}&fulfillmentMethod=`
  )

  const stations = response.data.Menu.MenuStations.map((station) => {
    return { id: station.StationId, name: station.Name }
  })

  const products = response.data.Menu.MenuProducts.map((product) => {
    const station = stations.find((s) => s.id == product.StationId)
    return {
      name: product.Product.MarketingName,
      description: product.Product.ShortDescription,
      station: station.name,
    }
  })
  return products
}
