
import React from 'react'
import Composition from './components/composition'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
export default function App() {
  return (
    <div>
      <Composition name="jimmy"></Composition>
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
    </div>
  )
}

