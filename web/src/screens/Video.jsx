import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from '../components/Box'
import firebase from 'firebase';


export default () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("videos").orderBy('position', 'desc').get().then((querySnapshot) => {
      setVideos(querySnapshot.docs.map(value => {
        return value.data().video
      }));
    })
  }, []);
  return (
    <div>
      <Link to="/">
        <img src={require("../images/logoBlack.png")}
          style={{
            zIndex: 1000,
            padding: '8px',
            position: 'absolute',
            height: '48.64px',
            width: '73.72px',
            resizeMode: 'contain'
          }}
          alt="logo"/>
        <p style={{
          zIndex: 1000,
          left: '13px',
          position: 'absolute',
          padding: '8px',
          color: 'black',
          top: '60px',
          fontWeight: 'bold'
        }}>HOME</p>
      </Link>
      <Box sideMargin row center>
        <h2>VIDEO</h2>
      </Box>

      <div style={{ height: '10px' }}/>

      {videos.map((video, index) => {
        if (index === 0) {
          video = video.slice(-1) === "/" ? `${video}?autoplay=1` : `${video}/?autoplay=1`;
        }
        return (<Box sideMargin>
          <iframe width="100%" height="400" src={video} frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Box>)
      })}
    </div>
  )
}

