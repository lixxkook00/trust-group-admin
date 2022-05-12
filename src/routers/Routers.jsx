import React from 'react'
import { Route,Routes} from 'react-router-dom';

import Dashboard from '../pages/Dashboard'
import P2P from '../pages/P2P'
import Affiliate from '../pages/Affiliate';
import Activity from '../pages/Activity'

export default function Routers() {
  return (
    <Routes>
        {/* Dash Board */}
        <Route exact path="/" element={< Dashboard/>} />

        {/* P2P */}
        <Route exact path="/p2p" element={< P2P/>} />

         {/* Affiliate */}
        <Route exact path="/affiliate" element={< Affiliate/>} />

        {/* Activity */}
        <Route exact path="/activity" element={< Activity/>} />

        {/* Detail Shop */}
        {/* <Route path="/shop/:_id" element={<ShopDetail/>} /> */}

        {/* Not Found */}
        {/* <Route path="*" element={<NotFound404/>} /> */}
    </Routes>
  )
}
