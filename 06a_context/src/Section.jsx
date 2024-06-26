import React from 'react'

function Section({children, isFancy}) {
  return (
    <section className='section {isFancy? "isfancy": ""}'>

    </section>
  )
}

export default Section