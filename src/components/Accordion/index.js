import React, { useState, useRef } from 'react';
import { ReactComponent as Chevron } from "../../assets/img/chevron.svg";

import './styles.css';


export const Accordion = ({ title, children }) => {
  const [toggle, setToggle] = useState('');
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setToggle(!toggle ? 'active' : '');
    setHeight(!toggle ? `${contentRef.current.scrollHeight}px` : '0px');
  };

  return (
    <article className="accordion__article">
      <button className={`accordion ${toggle}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <span className={`accordion__icon-arrow ${toggle === 'active' ? 'rotate' : 'rotate-default'}`}>
          <Chevron/>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="accordion__content"
      >
        <div className="accordion__text">{children}</div>
      </div>
    </article>
  )
};
