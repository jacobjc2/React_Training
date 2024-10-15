import React from 'react'

const Tabs = ({children, buttons, ButtonContainer = "menu"}) => {
    // this has to start with a Capital Letter
    //const ButtonContainer = buttonsContainer;

  return (
    <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
  )
}

export default Tabs