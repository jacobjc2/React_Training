import React from 'react'
import reactImg from '../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  // Keeping this code out of the JSX below is recommended to keep the HTML code cleaner
  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

export default Header