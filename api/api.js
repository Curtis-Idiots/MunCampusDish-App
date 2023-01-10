import axios from "axios"
const BASE_URL = `https://mun.campusdish.com/api/menu/`

exports.fetchMenu = async (periodID) => {
  const date = new Date()
  const datestr = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`
  let response = await axios.get(
    BASE_URL +
      `GetMenus?locationId=6721&storeIds=&mode=Daily&date=${datestr}&time=&periodId=${periodID}&fulfillmentMethod=`
  )

  const stations = []

  response.data.Menu.MenuStations.forEach((station) => {
    const findStation = stations.find((s) => s.id === station.StationId)
    if (findStation) return
    stations.push({ id: station.StationId, title: station.Name })
  })

  const products = response.data.Menu.MenuProducts.map((product) => {
    const station = stations.find((s) => s.id == product.StationId)
    return {
      name: product.Product.MarketingName,
      description: product.Product.ShortDescription,
      station: station.name,
      stationId: station.id,
    }
  })

  const menuData = stations.map((s) => {
    const stationProducts = products.filter((p) => p.stationId === s.id)
    s.data = stationProducts
    return s
  })

  return menuData
}
