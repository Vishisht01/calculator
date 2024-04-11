import React, { useState } from 'react'
import * as math from "mathjs"
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
  const resetInput = () => {
    setText("")
    setResult("")
  }

  const calculateResult = () => {
    const input = text.join("")
    setResult(math.evaluate(input))
  }
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="rows">
          <Button symbol="7" onClick={addtoText} />
          <Button symbol="8" onClick={addtoText} />
          <Button symbol="9" onClick={addtoText} />
          <Button symbol="/" onClick={addtoText} color={buttonColor} />
          <Button symbol="4" onClick={addtoText} />
          <Button symbol="5" onClick={addtoText} />
          <Button symbol="6" onClick={addtoText} />
          <Button symbol="*" onClick={addtoText} color={buttonColor} />
          <Button symbol="1" onClick={addtoText} />
          <Button symbol="2" onClick={addtoText} />
          <Button symbol="3" onClick={addtoText} />
          <Button symbol="+" onClick={addtoText} color={buttonColor} />
          <Button symbol="0" onClick={addtoText} />
          <Button symbol="." onClick={addtoText} />
          <Button symbol="=" onClick={calculateResult} />
          <Button symbol="-" onClick={addtoText} color={buttonColor} />
        </div>
        <Button symbol="Clear" color="red" onClick={resetInput} />
      </div>
    </div>
  )
}

export default App