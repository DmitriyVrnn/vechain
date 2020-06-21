import React from 'react';
import { ReactComponent as Plus } from "../../assets/img/plus.svg";
import { ReactComponent as Vector } from "../../assets/img/vector.svg";

import './styles.css';


export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__wrap-text">
        <span>change</span>
        <strong>NOW</strong>
      </div>
      <Plus/>
      <Vector/>
    </div>
  )
};
