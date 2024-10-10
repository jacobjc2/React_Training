import React from 'react';
import './CoreConcept.css';

/*
    Can also use object destructuring to destructure the props:
        const CoreConcept = ({image, title, description}) => {

    We could then use these as standalone variables without the "props." 
*/
const CoreConcept = (props) => {
  return (
    <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  )
}

export default CoreConcept