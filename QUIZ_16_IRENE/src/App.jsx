import { useState } from 'react'
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <SideBar />
    </>
  )
}

export default App
