import React from 'react';

import { Accordion } from "../../components/Accordion";
import { FAQ_TITLE_DESKTOP, FAQ_TITLE_MOBILE, listAnswer } from "../../assets/content";

import './styles.css';


export const FAQ = () => {
  return (
    <section className="faq row">
      <div className="faq__wrapper">
        <h2 className="faq__title">{ window.innerWidth > 860 ? FAQ_TITLE_DESKTOP : FAQ_TITLE_MOBILE }</h2>
        <ul className="faq__list">
          {listAnswer.map(item =>
            <li className="faq__list-item">
              <Accordion title={item.QUESTIONS} {...item}>
                <p>{item.ANSWER}</p>
              </Accordion>
            </li>)}
        </ul>
        <span className="text__powered-by-change">Powered by Change <strong className="text__now">NOW</strong></span>
      </div>
    </section>
  )
};
