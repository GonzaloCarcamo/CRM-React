import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './pages/Main'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import ShowClient from './pages/ShowClient'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ShowClient />} />
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
