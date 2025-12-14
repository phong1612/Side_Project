import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import styles from './App.module.css'
export default function App() {

  const [buttonContent, setButton] = useState('About me')
  const [lightMode, setLight] = useState(true)
  return (
    <>
      <Header buttonContent={buttonContent} setButton={setButton} lightMode={lightMode} setLight={setLight}/>
      <MainContent buttonContent={buttonContent} setButton={setButton} lightMode={lightMode}/>
    </>
  )
}