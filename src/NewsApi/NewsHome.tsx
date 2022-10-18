import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewsDetail } from './NewsDetail'
import NewsList from './NewsList'

export const NewsHome = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewsList/>}/>
          <Route path='/newsDetail' element={<NewsDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
