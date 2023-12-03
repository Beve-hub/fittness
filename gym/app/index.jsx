import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import {  StatusBar } from 'expo-status-bar'


const index = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Image style={styles.job} source={require('../assets/images/welcome.png')}/>
      <LinearGradient 
      colors={['transparent', '#18181b']}
      style={{width:wp(100), height:hp(120)}}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.8}}
      >
        <View style={styles.top}>
            <Text style={styles.mid}>
                Best<Text style={styles.end}>Workouts</Text>
            </Text>
            <Text style={styles.mid}>
                For You
            </Text>
        </View>
        <View style={styles.topp}>
            <TouchableOpacity style={styles.low}
             onPress={() => router.push('Home')}
            >
                <Text style={styles.them}>Get Started</Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 },
 job: {
    position: 'absolute',
    resizeMode: 'contain',
    height: 900,
    width: 600,
 },
 top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 400
 },
 topp: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:120,
    left: 50
 },
 low: {
    display: 'flex',
    backgroundColor: '#e11d48',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 300,
    borderRadius: 30,
    margin: 'auto'
 },
 mid: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    
 },
 end: {
    color: '#e11d48'
 },
 them: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
 }

})