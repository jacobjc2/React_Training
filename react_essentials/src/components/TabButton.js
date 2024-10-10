import React from 'react'

const TabButton = (props) => {
  return (
    <li>
        <button className={props.isSelected ? "active" : undefined} onClick={props.onClick}>{props.children}</button>
    </li>
  )
}

export default TabButton