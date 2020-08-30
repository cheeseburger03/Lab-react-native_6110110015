import React, { useState , useEffect } from 'react'
import {Text, ImageBackground,StyleSheet , View} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
        const [forecastInfo, setForecastInfo] = useState({
            main: 'Main Area',
            description: 'Description Area',
            temp: 0
            })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=23310f2894e3255687adace8ca2e16d5 `)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp });
            })
        .catch((error) => {
                console.warn(error);
        });
    }
}, [props.zipCode])
       
    
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