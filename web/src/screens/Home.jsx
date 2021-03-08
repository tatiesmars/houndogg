import React, { useEffect, useState } from "react";
import firebase from "firebase";
import AwesomeSlider from "react-awesome-slider";
import { Link } from "react-router-dom";

export default () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("contenus").orderBy('position').get().then((querySnapshot) => {
      const result = querySnapshot.docs.filter((element) => element.data().main);
      setImages(result.map(value => {
        return {
          source: value.data().image
        }
      }));
    })
  }, []);
  return (
    <>
      <Link to="/">
        <img src={require("../images/logo192.png")}
          style={{
            zIndex: 1000,
            position: 'absolute',
            padding: '8px',
            height: '48.64px',
            width: '73.72px',
            resizeMode: 'contain'
          }} alt="logo"/>
      </Link>
      <a href="https://shop.houndogg.net/">
        <p style={{
          zIndex: 1000,
          position: 'absolute',
          padding: '8px',
          right: 0,
          color: 'white',
          fontWeight: 'bold'
        }}>SHOP</p>
      </a>
      <Link to="/about">
        <p style={{
          zIndex: 1000,
          position: 'absolute',
          padding: '8px',
          bottom: 0,
          color: 'white',
          fontWeight: 'bold'
        }}>ABOUT</p>
      </Link>
      <Link to="/video">
        <p style={{
          zIndex: 1000,
          position: 'absolute',
          padding: '8px',
          bottom: 0,
          right: 0,
          color: 'white',
          fontWeight: 'bold'
        }}>VIDEO</p>
      </Link>
      <AwesomeSlider bullets={false} organicArrows={false} infinite={images.length > 1} fillParent
        media={images}/>

    </>
  )
}
