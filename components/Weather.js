import React, { useState } from 'react'
import {Text, ImageBackground,StyleSheet , View} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
            main: 'Main',
            description: 'Discription',
            temp: 0
    })

    return(
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>
            <View style = {text.backdrop}>
                <Text style = {font.zipFont}>Zip Code is {props.zipCode} </Text>
                <Forecast {...forecastInfo}/>
            </View>
            
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
});

const text = StyleSheet.create({
    backdrop : {
        width : '100%' ,
        height : '30%',
        backgroundColor : 'rgba(0,0,0,0.5)',
        justifyContent : 'center',
        alignItems : 'center'
    }
});

const font = StyleSheet.create({
    zipFont : {
        textAlign: 'center',
        color : '#fff',
        fontSize : 30 
    }
})