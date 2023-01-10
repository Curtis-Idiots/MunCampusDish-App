import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from './assets/constants';
import FoodCard from './components/FoodCard';
import HomeHeader from './components/HomeHeader'
import { RootSiblingParent } from 'react-native-root-siblings';
import api from './api/api'
import { useEffect, useState } from 'react';


export default function App() {
  const [menu, setMenu] = useState([])
  // Probably use the code for the meal instead of "lunch"
  const [meal, setMeal] = useState('lunch')

  useEffect(() => {

    // it's not going to be if/else in the real API call, use the meal code in the requrest url instead
    if (meal === "breakfast") {
      api.getBreakfast().then(data => {
        setMenu(data)
      })
    } 
    else if (meal === "lunch") {
      api.getLunch().then(data => {
        setMenu(data)
      })
    }
    else if (meal === "dinner") {
      api.getDinner().then(data => {
        setMenu(data)
      })
    }
    
  }, [meal])

  const changeMeal = (meal) => {
    setMeal(meal)
  }

  const handleSearch = (query) => {
    const formattedQuery = query.toLowerCase()
    const data = menu.filter(product => {
      if (product.name && product.name.includes(formattedQuery)) {
        return product
      }
    })
    setMenu(data)
  }

  /* I currently don't know how the products are partitioned (Mongolian, Grill, etc...). Therefore I'll use normal FlatList instead of SectionList
    When we figure it out, use below code for list instead of what is used atm.
  <SectionList
  sections={menu}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => <FoodCard data={item} />}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={{ fontSize: 24, fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10, margin: 10 }}>{title}</Text>
  )}
  ListHeaderComponent={<HomeHeader />}
  />
*/

  return (
    <RootSiblingParent>
      <SafeAreaView style={{ paddingTop: 24 }}>
        <View>
          <View>
            <Text />
            <FlatList
              data={menu}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <FoodCard data={item} />}
              ListHeaderComponent={<HomeHeader action={changeMeal} searchAction={handleSearch} currentMeal={meal} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </RootSiblingParent>
  );
}
