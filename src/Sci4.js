import React, { Component } from "react";
import { useState } from "react";

import posts from "./posts.json"
import logo from './logo.svg';
import './Sci.css';
//import a from './icons/Icon14_01.png';
const images = require.context('./icons', true);
const imageList = images.keys().map(image => images(image));


function Sci4() {
    const [flag, setFlag] = useState(false);
    const setDziala = (event) => {
        setFlag(!flag)
        console.log(flag);
    }
    return (
        <div className="grid">
            {posts.map((element, index, arr) => {
                
                return (
                    <>
                    <div className="Box">
                        <p>{element.title}</p>
                        <img src={imageList[element.id % 40]} alt={imageList[element.id % 40]} className="BoxImage"></img>
                        <p>{element.body.substring(0, 50)}...</p>
                    </div>
                    </>
                )
            })}
        </div>
    );
}

export default Sci4;
