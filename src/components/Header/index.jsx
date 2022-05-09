import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className="col-xl-12">
        <div className="header">
            <div className="header-logo">
                <img src="/assets/img/title - dashboard.png" alt="" />
                {/* <img src="/assets/img/logoP2P.png" alt="" /> */}
            </div>
            <div className="header-infor">
                <div className="header-infor-avt">
                    <img src="/assets/img/hh - 02.png" alt="" />
                </div>
                <div className="header-infor-text">
                    <p>Welcome</p>
                    <h2>Lê Quang Linh</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
