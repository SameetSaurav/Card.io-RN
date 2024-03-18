import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.hadding}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>right</Text>
        </View>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElveted]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    hadding: {
        fontSize: 20,
        paddingLeft: 150,
        paddingTop: 20,
    },

    container: {
        padding: 8,
    },

    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        margin:8,
        borderRadius: 5,
    },

    cardElveted: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
    },
})