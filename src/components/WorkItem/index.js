import React from 'react';

import './styles.css';

export const WorkItem = ({ work }) => (
  <figure className="how-exchange-works-item">
    <div className="how-exchange-works-item__figure">
      <span className="how-exchange-works-item__number">{work.NUMBER}</span>
    </div>
    <figcaption className="how-exchange-works-item__figcaption">
      <h3 className="how-exchange-works-item__title">{work.TITLE}</h3>
      <p className="how-exchange-works-item__description">{work.DESCRIPTION}</p>
    </figcaption>
  </figure>
);
