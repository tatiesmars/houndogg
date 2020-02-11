import React from "react";
import {Image, View, Text } from "react-native";

class App extends React.Component {
  render() {
    return (
        <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000000"
            }}
        >
          <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'  }}>
              <Image source={require("./images/logoWithText512.png")}  style={{height: 192, width: 291, resizeMode: 'contain'}}/>
              <Text style={{paddingTop: 12, fontSize: 18 , fontFamily: "Helvetica Neue", color: "#ffffff", textAlign: "center"}}>Coming soon...</Text>
          </View>
        </View>
    );
  }
}
export default App;
