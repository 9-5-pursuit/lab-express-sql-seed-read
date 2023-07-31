import React, { useContext } from 'react'
import { TableContext } from './components/context'
import Table from './Table'
import Albums from './Albums'
function Home() {
  const { play } = useContext(TableContext)
  return (
    <div>
      <Table play={play} />
      <Albums />
    </div>
  )
}

export default Home