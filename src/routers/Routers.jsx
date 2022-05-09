import React from 'react'
import { Route,Routes} from 'react-router-dom';

import Dashboard from '../pages/Dashboard'
import P2P from '../pages/P2P'

export default function Routers() {
  return (
    <Routes>
        {/* Dash Board */}
        <Route exact path="/" element={< Dashboard/>} />

        {/* P2P */}
        <Route exact path="/p2p" element={< P2P/>} />

        {/* Detail Shop */}
        {/* <Route path="/shop/:_id" element={<ShopDetail/>} /> */}

        {/* Not Found */}
        {/* <Route path="*" element={<NotFound404/>} /> */}
    </Routes>
  )
}
