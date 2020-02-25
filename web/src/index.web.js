
import './fonts/MonumentExtended-Regular.otf'
import './fonts/MonumentExtended-Ultrabold.otf'
import './index.css';
import { AppRegistry } from 'react-native';
import App from './App';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAe13oeFs_7lUGqksMhx_Ue2YBb1DBG-zA",
    authDomain: "houndogg-24837.firebaseapp.com",
    databaseURL: "https://houndogg-24837.firebaseio.com",
    projectId: "houndogg-24837",
    storageBucket: "houndogg-24837.appspot.com",
    messagingSenderId: "28896623357",
    appId: "1:28896623357:web:a7bb714e8ffb0659dc5c94",
    measurementId: "G-R9LEE7YV4C"
};
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
    rootTag: document.getElementById("react-root")
});
