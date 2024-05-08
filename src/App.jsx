import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Footer from './Footer'
import Navbar from './Navbar'

export default function App() {
let [language,setLanguage] = useState("hi")
let [search,setSearch] = useState("")


 let changeLanguage = (data)=>{
   setLanguage(data)
  }

 let searchNews = (data)=>{
  setSearch(data)
  }

    return (
      <>
      <BrowserRouter>
      <Navbar searchNews={searchNews} changeLanguage={changeLanguage}/>
      <Routes>
        <Route path="/" element={<Home search={search} language={language} q="All"/>}/>
        <Route path="/all" element={<Home search={search} language={language} q="All"/>}/>
        <Route path="/politics" element={<Home search={search} language={language} q="Politics"/>}/>
        <Route path="/education" element={<Home search={search} language={language} q="Education"/>}/>
        <Route path="/crime" element={<Home search={search} language={language} q="Crime"/>}/>
        <Route path="/entertainment" element={<Home search={search} language={language} q="Entertainment"/>}/>
        <Route path="/science" element={<Home search={search} language={language} q="Science"/>}/>
        <Route path="/technology" element={<Home search={search} language={language} q="Technology"/>}/>
        <Route path="/sports" element={<Home search={search} language={language} q="Sports"/>}/>
        <Route path="/jokes" element={<Home search={search} language={language} q="Jokes"/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
    )
  }

