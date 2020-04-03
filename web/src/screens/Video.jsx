import React from "react";
import {Link} from "react-router-dom";
import Box from '../components/Box'


export default () => {
    return (
        <>
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
            </Link>

            <Box row center>
                <h2>VIDEO</h2>
            </Box>

            <iframe width="100%" height="400" src="https://www.youtube.com/embed/hGQ88_LqKnA" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

        </>
    )
}

