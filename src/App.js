import React from 'react';

import { Header } from "./layouts/Header";
import { Jumbotron } from "./layouts/Jumbotron";
import { HowExchangeWorks } from "./layouts/HowExchangeWorks";
import { FAQ } from "./layouts/FAQ";


const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <Jumbotron/>
      </div>
      <div className="how-exchange-works__wrapper">
        <div className="container">
          <HowExchangeWorks/>
        </div>
        <div className="bg"/>
      </div>
      <FAQ/>
    </div>
  );
};

export default App;
