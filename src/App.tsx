import React from 'react';
import './App.css';
import Header from './header/Header'
// import {Switch, Route} from "react-router-dom";
import Main from './main/Main'
import Skills from './skills/Skills'
import Works from './works/Works'
import DistantWork from "./distantWork/DistantWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
