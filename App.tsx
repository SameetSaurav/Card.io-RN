import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        <Flatcard />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        
      </ScrollView>
    </SafeAreaView>
  )
}


export default App