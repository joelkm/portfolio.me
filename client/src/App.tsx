import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Page from './components/Page/Page'
import Logger from './components/Logger/Logger'

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className='container'>
        <Header/>
        <div className='interface'>
          <Navigation/>
          <div className='content'>
            <Page/>
            <Logger/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
