import React from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import SEPracticePage from './pages/SEPracticePage'
import SubmitArticle from './pages/Submit-Article'
import SearchArticle from './pages/Search-Article'
import NotFoundPage from './pages/404'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li>
            <NavLink end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/SEPracticePage">Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
          <li>
            <NavLink to="/SearchArticle">Search an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SEPracticePage" element={<SEPracticePage />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            <Route path="/SearchArticle" element={<SearchArticle />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
