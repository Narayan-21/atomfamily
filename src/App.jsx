import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todoAtomFamily } from './atoms'

function App() {
  return (
    <>
    <RecoilRoot>
      <Todo id={1} /><br/>
      <Todo id={2} /><br/>
      <Todo id={1} />
    </RecoilRoot>
    </>
  )
}

function Todo({id}) {
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return <div>
    {currentTodo.title}
    <br />
    {currentTodo.description}
  </div>
}


export default App
