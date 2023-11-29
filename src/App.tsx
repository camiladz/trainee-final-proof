import './App.css'
import { AffiliatesContent } from './components/affiliate'
import { Header } from './components/header/index'
import { SideBar } from './components/sideBar'
import { AffiliateLevelsContextProvider } from './contexts'

function App() {

  return (
    <AffiliateLevelsContextProvider>
      <Header />

      <div className='main__content'>
        <SideBar />
        <AffiliatesContent />
      </div>
    </AffiliateLevelsContextProvider>
  )
}

export default App
