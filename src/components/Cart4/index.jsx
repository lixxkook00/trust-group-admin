import React from 'react'
import './Cart4.scss'

export default function Cart4({title,value,isBtn}) {
  return (
    <div className="col-xl-3">
        <div className="cart4">
            {/* back ground */}
            <img src="/assets/img/frame - 01.png" alt="" className="cart4-bg" />
            
            {/* content */}
            <div className="cart4-content">
                {/* title */}
                <div className="cart4-title">
                    {title}
                </div>
                {/* value */}
                <div className="cart4-value">
                    {value}
                </div>
                {/* escrow */}
                {
                    isBtn === true 
                    ? 
                    <div className="primary-button cart4-btn">
                        ESCROW
                    </div>
                    :
                    ""
                }
                
            </div>
        </div>
    </div>
  )
}
