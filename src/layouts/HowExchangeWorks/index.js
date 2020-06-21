import React from 'react';

import { WorkList } from "../../components/WorkList";
import { INFORMATION_TITLE } from "../../assets/content";

import './styles.css';


export const HowExchangeWorks = () => {
  return (
    <section className="how-exchange-works row">
      <h2 className="how-exchange-works__title">{INFORMATION_TITLE}</h2>
      <WorkList/>
    </section>
  )
};
