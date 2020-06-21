import React from 'react';

import { Widget } from "../../components/Widget";
import { JUMBO_TEXT, JUMBO_TITLE } from "../../assets/content";

import './styles.css';


export const Jumbotron = () => {
  return (
    <section className="jumbo row">
      <div className="jumbo__main">
        <h1 className="jumbo__main-title">{JUMBO_TITLE}</h1>
        <p className="jumbo__main-text">{JUMBO_TEXT}</p>
      </div>
      <div className="jumbo__widget">
        <Widget/>
      </div>
    </section>
  )
};
