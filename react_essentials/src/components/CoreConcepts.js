import React from 'react'
import CoreConcept from './CoreConcept.js';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.js';

const CoreConcepts = () => {
  return (
        <Section title="Core Concepts" id="core-concepts">
          <ul>
            {
              // We can map the core concepts to iterate over the CORE_CONCEPTS array to dynamically generate the list
              CORE_CONCEPTS.map((concept) => 
                <CoreConcept 
                  key={concept.title}
                  {...concept}
                />
              )
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
        </Section>
  )
}

export default CoreConcepts