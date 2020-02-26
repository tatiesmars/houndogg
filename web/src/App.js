import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './App.scss'
import firebase from 'firebase/app';
import 'firebase/firestore';

const StartupScreen = <View
    style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000"
    }}
>
    <View style={{alignItems: 'center', zIndex: 200, flex: 1, justifyContent: 'center'}}>
        <Image source={require("./images/logoWithText512.png")}
               style={{height: 192, width: 291, resizeMode: 'contain'}}/>
        <Text style={{
            paddingTop: 12,
            fontSize: 18,
            fontFamily: "Helvetica Neue",
            color: "#ffffff",
            textAlign: "center"
        }}>Coming soon...</Text>
    </View>
</View>

export default function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection("contenus").orderBy('position').get().then((querySnapshot) => {
            setImages(querySnapshot.docs.map(value => ({
                source: value.data().image
            })));
        })
    }, []);
    return (
        <AwesomeSlider bullets={false} organicArrows={false} fillParent media={images} startupScreen={StartupScreen}
                       startupDelay={1000}/>
    );
}
