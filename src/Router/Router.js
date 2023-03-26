import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cheikh from "./../Cheikh/Cheikh"
import Search from "./../Search/Search"
import Home from "./../Home/Home"
import Qurain from "./../Qurain/Qurain"
import Surah from "./../Surah/Surah"
import Prey from '../Prey/Prey'
import Live from '../Live/Live'
import Notfound from '../Notfound/Notfound'

export default function Routeur() {
  return (
  <BrowserRouter>

  <Routes>      
     <Route exact  path="/qurain/:id"  element={<Cheikh />}/>
     <Route exact  path="/readqurain/:id"  element={<Surah />}/>
     <Route exact  path="/qurain"  element={<Search />}/>
     <Route exact  path="/readqurain"  element={<Qurain />}/>
     <Route exact  path="/"  element={<Home />}/>
     <Route exact  path="/prayer"  element={<Prey />}/>
     <Route exact  path="/live"  element={<Live />}/>
     <Route path="*" element={<Notfound />} />

       </Routes>
  </BrowserRouter>
  )
}
