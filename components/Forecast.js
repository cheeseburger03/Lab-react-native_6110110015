import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
export default function Forecast(props){
    return(
        <View>
            <Text style={font.adjust}>{props.main}</Text>
            <Text style={font.adjust}>{props.description}</Text>

            <Text></Text>
            <Text></Text>
            <Text style={font.adjust}>{props.temp} °C</Text>
        </View>
    )
} 

const font = StyleSheet.create({
        adjust : {
            color : '#fff',
            fontSize : 30 ,
            textAlign : 'center'
        }
        
})