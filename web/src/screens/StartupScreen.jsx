import React from "react";
import {Image, Text, View} from 'react-native';


export default () => (<View
    style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    }}
>
    <View style={{alignItems: 'center', zIndex: 200, flex: 1, justifyContent: 'center'}}>
        <Image source={require("../images/logoWithText512.png")}
               style={{height: 192, width: 291, resizeMode: 'contain'}}/>
        <Text style={{
            paddingTop: 12,
            fontSize: 18,
            fontFamily: "Helvetica Neue",
            color: "#ffffff",
            textAlign: "center"
        }}>Coming soon...</Text>
    </View>
</View>)
