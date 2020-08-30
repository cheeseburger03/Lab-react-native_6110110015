import React from 'react'
import { FlatList, View ,Text , StyleSheet, ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight style = {box.pad} onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
        <ImageBackground style = {block.backdrop}>
            <View style = {styles.zipItem}>
            <Text style = {text.letter}>  {place}</Text>
            <Text style = {text.letter}>  {code} </Text>
        </View>
        </ImageBackground>
            
        
    </TouchableHighlight>

)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../bg3.jpg')} style = {bg3.backp}>
            <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation} /> }
        />
        </ImageBackground>
        
    )
}
const styles = StyleSheet.create({
        zipItem: {
            flex: 1 ,
            flexDirection: 'row',
            justifyContent : 'space-evenly',
            alignItems : 'center',
        
        },
        zipPlace : {
            flex : 1 ,
            
        },
        zipCode: {
            flex : 1 ,
        },

       
});

const bg3 = StyleSheet.create ({
    backp : {
        height : '100%' ,
        width : '100%'
    }
});

const block = StyleSheet.create({
    backdrop : {
            flexDirection : 'column' ,
            justifyContent : 'center',
            alignItems : 'center',
            height : '99%',
            
            
        }
});

const text = StyleSheet.create({
    letter : {
            color : '#fff',
            fontSize : 25 ,
            textAlign : 'center',
            
    }
});

const box = StyleSheet.create({
    pad : {
        borderWidth : 1.6,
        borderColor : 'black',
        height : '100%',
        width : ' 100%',
        
        
    }
});



