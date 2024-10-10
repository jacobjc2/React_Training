import React from 'react'

// ...props collects any other props passed into Section
const Section = ({title, children, ...props}) => {
  return (
    // {...props} allows us to spread the remaining props that are passed to Section onto the section element
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section