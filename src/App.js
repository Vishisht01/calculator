import React from 'react'
import "../src/App.css"
import Button from './components/Button'
import Input from './components/Input'
const App = () => {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input />
        <div className="rows">
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="/" />
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="*" />
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" />
          <Button symbol="0" />
          <Button symbol="." />
          <Button symbol="=" />
          <Button symbol="-" />
        </div>
        <Button symbol="Clear" />
      </div>
    </div>
  )
}

export default App