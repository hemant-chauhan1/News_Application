import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  let [search, setSearch] = useState("")

  function postSearch(e) {
    e.preventDefault()
    props.searchNews(search)
    setSearch("")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/all" onClick={()=>props.searchNews("")}>All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/politics"onClick={()=>props.searchNews("")}>Politics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/education"onClick={()=>props.searchNews("")}>Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/crime"onClick={()=>props.searchNews("")}>Crime</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/entertainment"onClick={()=>props.searchNews("")}>Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/science"onClick={()=>props.searchNews("")}>Science</Link></li>
                  <li><Link className="dropdown-item" to="/technology"onClick={()=>props.searchNews("")}>Technology</Link></li>
                  <li><Link className="dropdown-item" to="/sports"onClick={()=>props.searchNews("")}>Sports</Link></li>
                  <li><Link className="dropdown-item" to="/jokes"onClick={()=>props.searchNews("")}>Jokes</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button></li>
                  <li><button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={postSearch}>
              <input className="form-control me-2" type="search" name="search" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
