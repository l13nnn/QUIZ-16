import { useState } from 'react'
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import MiddleComponent from './MiddleComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <SideBar />
     <MiddleComponent />
    </>
  )
}

export default App
