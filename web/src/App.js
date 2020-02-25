import {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {TouchableWithoutFeedback} from "react-native-web";

export default function App() {
    // Declare a new state variable, which we'll call "count"
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection("contenus").orderBy('position').get().then((querySnapshot) => {
            setImages(querySnapshot.docs.map(value => value.data().image));
        })
    }, []);

    if (!images.length) {
        return <View/>
    }

    const onNext = () => {
        setIndex(index => index === images.length - 1 ? 0 : index + 1)

    }

    const onPrev = () => {
        setIndex(index => index === 0 ? images.length - 1 : index - 1)
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#000000"
            }}
        >
            <ImageBackground resizeMode="cover" source={{uri: images[index]}}
                             style={{width: '100%', height: '100%'}}>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                    <Image source={require("./images/logoWithText512.png")}
                           style={{height: 192, width: 291, resizeMode: 'contain'}}/>
                    <Text style={{
                        paddingTop: 12,
                        fontSize: 18,
                        fontFamily: "Helvetica Neue",
                        color: "#ffffff",
                        textAlign: "center"
                    }}>Coming soon...</Text>
                    <TouchableWithoutFeedback onPress={onPrev}>
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '50%',
                            backgroundColor: 'transparent'
                        }}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onNext}>
                        <View style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            height: '100%',
                            width: '50%',
                            backgroundColor: 'transparent'
                        }}/>
                    </TouchableWithoutFeedback>
                </View>
            </ImageBackground>

        </View>
    );
}
