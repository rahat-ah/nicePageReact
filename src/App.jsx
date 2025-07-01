import Main from './components/MainComponent/Main'           
import DummyHeader from './components/Header/DummyHeader'
import NiceHeader from './components/Header/NiceHeader'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='w-[100vw] overflow-x-hidden'>
      <NiceHeader />
      <DummyHeader />
      <Main />
      <Footer />
    </div>
  )
}

export default App
