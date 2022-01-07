import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import NewSession from './layout/NewSession'
import Main from './pages/Main'
import LoginForm from './pages/LoginForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<NewSession />}>
        <Route index element={<LoginForm />} />
        </Route>

        <Route path="/clients" element={<Layout/>}>
          <Route index element={<Main />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
