import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function BodyPart() {
    const router = useRouter();
  return (
    <View style={styles.first}>

      <Text style={styles.sec}>Exercise</Text>

     
     <FlatList
       data={bodyParts}
       numColumns={2}
       keyExtractor={item=> item.name}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
       columnWrapperStyle={{
        justifyContent: 'space-around'
       }}
       renderItem={({item, index})=> <BodyPartCard router={router} index={index} item={item}/>}
     />

    </View>
  )
}

const BodyPartCard = ({item,router, index}) =>{
    return (
        <View>
            <TouchableOpacity
            onPress={() => router.push({pathname: '/ Excercises', params:item})}
            style={styles.bag} >
             <Image
             source={item.image}
             resizeMode='cover'
             style={styles.tur}

            />
           
                 <LinearGradient
                   style={styles.pen}
                  start={{x: 0.5, y:0}}
                  end={{x: 0.5, y: 1}}
                 />
                <Text style={styles.text}>
                    {item?.name}
                </Text>
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        marginHorizontal: 5,
        marginVertical: 20
    },
    sec: {
       fontWeight: 'bold',
       fontSize:30,
        marginVertical: 10,
        marginLeft:10
    },
    bag: {
        width: wp(44),
        height: hp(52),
    },
    tur: {
        width: wp(44),
        height: wp(52),
        display:"absolute",
        borderRadius:40
    },
    pen: {
        width: wp(44),
        height: wp(15),
        display: 'absolute',
        bottom: 50,
        borderRadius: 40,
        colors: ['transparent','rgba(0,0,0.9)']
    },
    text: {
        fontSize: hp(2.3),
        color:'white',
        fontWeight: 'semibold'
    }
})