import React, { useState } from 'react'
import "../src/App.css"
import Button from './components/Button'
import Input from './components/Input'
const App = () => {
  const buttonColor = "#f2a33c"
  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const addtoText = (val) => {
    setText((text) => [...text, val + ""])
  }
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="rows">
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="/" color={buttonColor} />
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="*" color={buttonColor} />
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" color={buttonColor} />
          <Button symbol="0" />
          <Button symbol="." />
          <Button symbol="=" />
          <Button symbol="-" color={buttonColor} />
        </div>
        <Button symbol="Clear" color="red" />
      </div>
    </div>
  )
}

export default App