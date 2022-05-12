import React,{useState,useEffect} from 'react'
import './SideBar.scss'

import {Link} from 'react-router-dom'

const btnList = [
    {
        id:0,
        active: true,
        iconClass: "fa-solid fa-align-left",
        name: "DASHBOARD",
        url: ""
    },
    {
        id:1,
        active: false,
        iconClass: "fa-solid fa-arrows-spin",
        name: "P2P",
        url: "p2p"
    },
    {
        id:2,
        active: false,
        iconClass: "fa-solid fa-wallet",
        name: "WALLET",
        url: "wallet"
    },
    {
        id:3,
        active: false,
        iconClass: "fa-solid fa-chart-line",
        name: "ACTIVITY",
        url: "activity"
    },
    {
        id:4,
        active: false,
        iconClass: "fa-brands fa-affiliatetheme",
        name: "AFFILIATE",
        url: "affiliate"
    },
    {
        id:5,
        active: false,
        iconClass: "fa-solid fa-gear",
        name: "SETTING",
        url: "setting"
    },
    {
        id:6,
        active: false,
        iconClass: "fa-solid fa-right-from-bracket",
        name: "LOG OUT",
        url: "logout"
    },

]

export default function SideBar() {
    const [indexActive,setIndexActive] = useState(0)

    // active side bar item by link
    useEffect(() => {
        const currentBtn = btnList.find((btn) => btn.url === window.location.pathname.replace('/',''))
        setIndexActive(currentBtn.id)
    },[])
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
