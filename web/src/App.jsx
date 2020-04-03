import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import 'react-awesome-slider/dist/styles.css';
import './App.scss'
import firebase from 'firebase/app';
import 'firebase/firestore';
import StartupScreen from "./screens/StartupScreen";
import Home from "./screens/Home";
import About from "./screens/About";
import Video from "./screens/Video";

export default function App() {
    const [isComingSoon, setIsComingSoon] = useState(false);

    useEffect(() => {
        const db = firebase.firestore();
        db.collection("setup").doc("production").get().then((doc) => {
            setIsComingSoon(doc.data().isComingSoon);
        });
    }, []);
    if (true) {
        return (
            <Router>
                <Switch>
                    <Route path="/video">
                        <Video/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        )
    } else {
        return <StartupScreen/>
    }

}
