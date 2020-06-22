import React from 'react';
import { ReactComponent as Plus } from "../../assets/img/plus.svg";
import { ReactComponent as Vector } from "../../assets/img/vector.svg";
import { ReactComponent as Change } from "../../assets/logo/change.svg";
import { ReactComponent as Now } from "../../assets/logo/now.svg";

import './styles.css';


export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__wrap-text">
        <Change/>
        <Now/>
      </div>
      <Plus/>
      <Vector/>
    </div>
  )
};
