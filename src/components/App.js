/* eslint-disable no-unused-vars */
import React from 'react'
//Components
import Header from './Header/Header'
import Actions from './Actions'
import Fishes from './Fishes'
import Footer from './Footer/Footer'
//Global State
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Header/>
      <Actions/>
      <Fishes />
      <Footer />
    </RecoilRoot>
  )
}

export default App
