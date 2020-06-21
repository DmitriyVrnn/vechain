import React from 'react';

import { Logo } from "../../components/Logo";

import './styles.css';


export const Header = () => {
  return (
    <header className="header row">
      <Logo/>
    </header>
  )
};
