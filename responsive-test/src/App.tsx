import React from 'react';

import './App.css';
import Footer from './footer/footer';
import Cards from './cards/cards';
import Header from './header/header';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Cards />
      <Footer/>
    </React.Fragment>
    // <div className="App">
    //   <div className="header">
    //     <div className="hedaerinner">
    //       <div></div>
    //       <div className="search">
    //         <input type="text" />
    //         <img src={search} className="svg" alt="logo" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="header2">
    //   </div>
    //   <section className="aboutContainer">
    //     <div className="bgimage">
    //       <div>
    //         <h1>Save 10%</h1>
    //         <h2>Ipsum delicate sed ex</h2>
    //         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
    //       </div>
    //       <img src={image} className="App-logo" alt="logo" />
    //     </div>
    //   </section>
    //   <div className="color">
    //     <div>
    //       <span>#35D3B4</span>
    //     </div>
    //     <div>
    //       <span>#1B2191</span>
    //     </div>
    //     <div>
    //       <span>#D822EE</span>
    //     </div>
    //     <div>
    //       <span>#D822EE</span>
    //     </div>
    //   </div>

    //   <footer>
    //     <div className="footer">
    //       <div>
    //         <h3>Left Footer Links</h3>
    //         <small>Left Footer Link ONE</small>
    //         <small>Left Footer Link TWO</small>
    //       </div>
    //       <div>
    //         <h3>Left Footer Links</h3>
    //         <small>Left Footer Link ONE</small>
    //         <small>Left Footer Link TWO</small>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default App;
