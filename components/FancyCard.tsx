import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    function openWeb(websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
        <Text style={styles.hadding}>Trending Places</Text>
        <View style={[styles.card, styles.elevetedCard]}>
            <Image 
                source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
                style={styles.cardImg}
            />
        
            <View style={styles.cardBody}>
                <Text style={styles.cardPlace}>Image</Text>
                <Text style={styles.cardLocation}>Location</Text>
                <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsa!</Text>
                <TouchableOpacity onPress={() => openWeb('https://picsum.photos/')}>
                    <Text>go to </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    hadding: {
        fontSize: 20,
        paddingLeft: 160,
        paddingTop: 20,
    },

    card: {
        height: 350,
        width: 360,
        backgroundColor: '#CAD5E2',
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 8,
    },
    
    elevetedCard: {
        elevation:8,
        shadowOffset: {
            height: 1,
            width: 1,
        }
    },

    cardImg: {
        height: 200,
        borderRadius: 6,
        marginBottom: 8,
    },

    cardBody: {
        flex:1,
        paddingLeft: 15,
    },
    cardPlace: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    cardLocation: {},
    cardDescription: {},
})