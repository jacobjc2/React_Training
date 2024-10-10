import { useState } from "react";

import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton.js";
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
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
    <div>
      <Header /> 
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              // We can map the core concepts to iterate over the CORE_CONCEPTS array to dynamically generate the list
              CORE_CONCEPTS.map((concept) => 
                <CoreConcept 
                  {...concept}
                />
              )
              // This makes the code more DRY
            }
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image} 
            />
            <CoreConcept 
                // Can use the spread operator if the values in CORE_CONCEPTS have the same prop names as what is expected in the component
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[3]}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
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
        </section>
      </main>
    </div>
  );
}

export default App;
