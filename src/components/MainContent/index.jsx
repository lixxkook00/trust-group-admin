import React from 'react'
import './MainContent.scss'

import Header from '../Header'
import Routers from '../../routers/Routers'
import Dashboard from '../../pages/Dashboard'

export default function MainContent() {
  
  return (
    <div className="main">
        <div className="container">
            <div className="row">
                <Header />
                <Routers/>
            </div>
        </div>
    </div>
  )
}
