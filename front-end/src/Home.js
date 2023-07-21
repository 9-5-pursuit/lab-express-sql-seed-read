import React from 'react'
import Table from './Table'
import Albums from './Albums'
function Home({ play }) {
  return (
    <div>
       <Table play={ play }/> 
       <Albums /> 
    </div>
  )
}

export default Home