import React,{useState,useEffect} from 'react'
import './SideBar.scss'

import {Link} from 'react-router-dom'

const btnList = [
    {
        active: true,
        iconClass: "fa-solid fa-align-left",
        name: "DASHBOARD",
        url: "/"
    },
    {
        active: false,
        iconClass: "fa-solid fa-arrows-spin",
        name: "P2P",
        url: "p2p"
    },
    {
        active: false,
        iconClass: "fa-solid fa-wallet",
        name: "WALLET",
        url: "wallet"
    },
    {
        active: false,
        iconClass: "fa-solid fa-chart-line",
        name: "ACTIVITY",
        url: "activity"
    },
    {
        active: false,
        iconClass: "fa-brands fa-affiliatetheme",
        name: "AFFILIATE",
        url: "affiliate"
    },
    {
        active: false,
        iconClass: "fa-solid fa-gear",
        name: "SETTING",
        url: "setting"
    },
    {
        active: false,
        iconClass: "fa-solid fa-right-from-bracket",
        name: "LOG OUT",
        url: "logout"
    },

]

export default function SideBar() {
    const [indexActive,setIndexActive] = useState(0)
  return (
    <div className="sidebar">
        <div className="sidebar-logo">
            <img src="/assets/img/logo.png" alt="" />
        </div>
        {
            btnList.map((btn,index) => {
                return (
                    <Link onClick={() => setIndexActive(index)} to={btn.url} key={index} className={`sidebar-btn ${index === indexActive ? 'active' : ""}`}>
                        <div className="sidebar-btn-icon">
                            <i className={btn.iconClass}></i>
                        </div>
                        <div className="sidebar-btn-name">
                            {btn.name}
                        </div>
                        {
                            index === 5 ? <div className="primary-line"></div> : ""
                        }
                    </Link>
                )
            })
        }

    </div>
  )
}
