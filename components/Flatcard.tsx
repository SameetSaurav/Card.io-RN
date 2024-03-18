import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View>
      <Text style={styles.hadding}>Flatcard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    hadding: {
        fontSize: 20,
        paddingLeft: 170,
        paddingTop: 20,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 30,
    },

    card:{
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 5,
    },

    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#50DBB4'
    },
    cardThree:{
        backgroundColor: '#5DA3FA'
    },
})