import React from 'react'
import './MainContent.scss'

import Header from '../Header'
import Dashboard from '../../pages/Dashboard'

export default function MainContent() {
  
  return (
    <div className="main">
        <div className="container">
            <div className="row">
                <Header />
                <Dashboard/>
            </div>
        </div>
    </div>
  )
}
