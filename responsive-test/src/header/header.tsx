import React, { Component } from 'react';
import './header.css';
import image from './../../src/PEAK_PNG.png';
import search from './../../src/search_icon.svg';

export default class Header extends Component<any, any>{
    render() {
        return (
            <section className="contact-form">
                <div className="header">
                    <div className="hedaerinner">
                        <div></div>
                        <div className="search">
                            <input type="text" />
                            <img src={search} className="svg" alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="header2">
                </div>
                <div className="aboutContainer">
                    <div className="bgimage">
                        <div>
                            <h1>Save 10%</h1>
                            <h2>Ipsum delicate sed ex</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
                        </div>
                        <img src={image} className="App-logo" alt="logo" />
                    </div>
                </div>
            </section>
        )
    }
}