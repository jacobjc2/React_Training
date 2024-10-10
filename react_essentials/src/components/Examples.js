import React, { useState } from 'react'
import TabButton from "./TabButton.js";
import Section from './Section.js';
import { EXAMPLES } from '../data.js';

const Examples = () => {
  // useState
  const [selectedTopic, setSelectedTopic ] = useState();

  const handleClick = (buttonClicked) => {
    // buttonClicked => 'components', 'jsx', 'props', 'state' 
    setSelectedTopic(buttonClicked);
    console.log(selectedTopic);
  }

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
          <menu>
            {/* Now the arrow function is the defined function that is passed  */}
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
          </menu>
          { !selectedTopic ? 
            <p>Please select a topic.</p> : 
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          }
          {
            // Can also do conditional rendering like this
            // !selectedTopic && <p>Please select a topic.</p>
            // if the statement left of && is true then the code on the right will be rendered.
            // This can be used if we want to render something or nothing based on a condition
          }
          { 
            // Can also use {tabContent}, as defined above, to execute the content the same way
            // This approach takes the conditional statement out of the JSX code and makes it cleaner
          }
        </Section>
  )
}

export default Examples