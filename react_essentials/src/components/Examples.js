import React, { useState } from 'react'
import TabButton from "./TabButton.js";
import Section from './Section.js';
import Tabs from './Tabs.js';
import { EXAMPLES } from '../data.js';


const Examples = () => {
  const [selectedTopic, setSelectedTopic ] = useState();

  const handleClick = (buttonClicked) => {
    // buttonClicked => 'components', 'jsx', 'props', 'state' 
    setSelectedTopic(buttonClicked);
    console.log(selectedTopic);
  }

  let buttons = <>
            <TabButton 
              onClick={() => handleClick('components')}
              isSelected = {selectedTopic === 'components'}
            >
              Components
            </TabButton>
            <TabButton 
              onClick={() => handleClick('jsx')}
              isSelected = {selectedTopic === 'jsx'}
            >
              JSX
            </TabButton>
            <TabButton 
              onClick={() => handleClick('props')}
              isSelected = {selectedTopic === 'props'}
            >
              Props
            </TabButton>
            <TabButton 
              onClick={() => handleClick('state')}
              isSelected = {selectedTopic === 'state'}
            >
              State
            </TabButton>
        </>;


  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
        <Tabs 
            buttons={buttons}
            ButtonContainer="menu"
        >
            {tabContent}
        </Tabs>
    </Section>
  )
}

export default Examples