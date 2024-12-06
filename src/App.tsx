import React from 'react'
import {Header} from './components/header'
import Recherche from  './components/recherche'
import Search from './components/search'
import {Pagination} from './components/pagination'
import Recent_posts from './posts/recent_posts'

export const App = () => {
  return (
    <div>

<Search/>
<Recent_posts/>

      {/* 
      <Header/>
      
      <Pagination/>
      

      
      */}



    </div>
  )
}
