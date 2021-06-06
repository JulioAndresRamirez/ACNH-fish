import React from 'react'
//Components
import Header from './components/Header/Header'
import Actions from './components/Actions'
import Fishes from './components/Fishes'
//import Footer from './components/Footer/Footer'
//Global State
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header/>
      <Actions/>
      <Fishes />
      {/*<Footer />*/}
    </RecoilRoot>
  )
}

export default App
