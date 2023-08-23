import React from 'react'
import Button from './components/button/Button'

const styles = {
  background: "green",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "10px",
  fontWeight: "normal",
  align: "center",
  text: "Primary",
}

const App = () => {
  return (
    <Button styles={styles} />
  )
}

export default App