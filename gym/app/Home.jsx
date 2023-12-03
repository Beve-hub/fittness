import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {  StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from '../components/ImageSlider';
import BodyPart from '../components/BodyPart';

const Home = () => {
    return (
        <SafeAreaView style={styles.container} edges={['Top']}>
           <StatusBar style="dark" />

           <View style={styles.first}>
            <View style={styles.sec}>
                <Text style={styles.third}>READY TO</Text>
                <Text style={styles.for}>WORKOUT</Text>
            </View>

            <View style={styles.sec}>
                <Image source={require('../assets/images/avatar.png')}
                 style={styles.pic}/>
                <View style={styles.fiv}>
                <Ionicons name="notifications" size={24} color="black" />
                </View> 
            </View>
           </View>

           {/*image slider*/}

           <View>
            <ImageSlider/>
           </View>

           {/* bodypart */}
           
           <View style={styles.yup}>
            <BodyPart/>
           </View>

        </SafeAreaView>
    )
}
export default Home; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        margin: 'auto'

    },
    first: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5
    },
    sec:{
        marginHorizontal: 20,
        marginTop: 60,
        marginBottom: 40
    },
    third: {
        fontWeight: 'bold',
        margin: 'auto',
        fontSize: 20,
        color: '#121212'
    },
    for: {
        fontWeight: 'bold',
        margin: 'auto',
        fontSize: 20,
        color: '#e11d48'
    },
    pic: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginVertical: 5
    },
    fiv: {
        backgroundColor: 'rgb(212 212 212)',
        borderRadius: 500,
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})