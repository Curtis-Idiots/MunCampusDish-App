import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from './assets/constants';
import FoodCard from './components/FoodCard';
import HomeHeader from './components/HomeHeader'
export default function App() {

  const DATA = [
    {
      title: 'Grill',
      data: ['Chicken Burger', 'Fries']
    },
    {
      title: 'Mangolian',
      data: ['Chicken Noodles', 'Beef Noodles']
    },
    {
      title: 'Desserts',
      data: ['Ice Cream']
    }
  ]
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <View>
        <View>
          <SectionList 
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <FoodCard data={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{fontSize: 24, fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10, margin: 10}}>{title}</Text>
          )}
          ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
