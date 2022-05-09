import React from 'react'
import './SideBar.scss'

const btnList = [
    {
        active: true,
        iconClass: "fa-solid fa-align-left",
        name: "DASHBOARD"
    },
    {
        active: false,
        iconClass: "fa-solid fa-arrows-spin",
        name: "P2P"
    },
    {
        active: false,
        iconClass: "fa-solid fa-wallet",
        name: "WALLET"
    },
    {
        active: false,
        iconClass: "fa-solid fa-chart-line",
        name: "ACTIVITY"
    },
    {
        active: false,
        iconClass: "fa-brands fa-affiliatetheme",
        name: "AFFILIATE"
    },
    {
        active: false,
        iconClass: "fa-solid fa-gear",
        name: "SETTING"
    },
    {
        active: false,
        iconClass: "fa-solid fa-right-from-bracket",
        name: "LOG OUT"
    },

]

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-logo">
            <img src="/assets/img/logo.png" alt="" />
        </div>

        {
            btnList.map((btn,index) => {
                return (
                    // <>
                        <div key={index} className={`sidebar-btn ${btn.active === true ? 'active' : ""}`}>
                            <div className="sidebar-btn-icon">
                                <i className={btn.iconClass}></i>
                            </div>
                            <div className="sidebar-btn-name">
                                {btn.name}
                            </div>
                            {
                                index === 5 ? <div className="primary-line"></div> : ""
                            }
                        </div>
                    // </>
                )
            })
        }

    </div>
  )
}
