import React from 'react';

import { WorkItem } from "../WorkItem";
import { works } from "../../assets/content";

import './styles.css';


export const WorkList = () => {
  return (
    <ul className="how-exchange-works__work-list">
      {works.map((item) =>
        <li key={item.NUMBER} className="how-exchange-works__work-list_item">
            <WorkItem work={item}/>
        </li>)
      }
    </ul>
  )
};
