import React from 'react'
import './Dashboard.scss'

import Cart4 from '../../components/Cart4'
import CanvasChart from '../../components/CanvasChart'

export default function Dashboard() {
  return (
    <div className="col-xl-12">
        <div className="dashboard">
            {/* value account cart list */}
            <div className="row">
                <Cart4 
                    title={"TGT ITO ACCOUNT"}
                    value={"0.0 TGT"}
                    isBtn={true}
                />
                <Cart4 
                    title={"TGT ESCROW ACCOUNT"}
                    value={"0.0 TGT"}
                    isBtn={false}
                />
                <Cart4 
                    title={"TGT AVAILABLE ACCOUNT"}
                    value={"0.0 TGT"}
                    isBtn={false}
                />
                <Cart4 
                    title={"USDT ACCOUNT"}
                    value={"$ 1000"}
                    isBtn={false}
                />
                
                <div className="col-xl-6 mt-40">
                    <div className="cartXL">
                        <img className="cartXL-bg" src="/assets/img/frame - 02.png" alt="" />
                        <div className="cartXL-main">
                            {/* title */}
                            <div className="cartXL-title fradient-text centering justify-space-between">
                                <div>
                                    PRICE TGT
                                </div>
                                <div>
                                    $ 2.8721
                                </div>
                            </div>

                            {/* content */}
                            <div className="cartXL-content">
                                <CanvasChart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mt-40">
                    <div className="cartXL">
                        <img className="cartXL-bg" src="/assets/img/frame - 02.png" alt="" />
                        <div className="cartXL-main">
                            {/* title */}
                             <div className="cartXL-title fradient-text centering">
                                <div>
                                    P2P LENDING SUMMARY
                                </div>
                            </div>

                            {/* content */}
                            <div className="cartXL-content">
                                <div className="card-ul">
                                    <div className="card-li">
                                        <div className="card-li-text">
                                            TGT Available Balance
                                        </div>
                                        <div className="card-li-value">
                                            80 TGT
                                        </div>
                                    </div>
                                    <div className="card-li">
                                        <div className="card-li-text">
                                            My Unmatched Loan Orders
                                        </div>
                                        <div className="card-li-value">
                                            0 TGT
                                        </div>
                                    </div>
                                    <div className="card-li">
                                        <div className="card-li-text">
                                            My Unmatched Borrowing Orders
                                        </div>
                                        <div className="card-li-value">
                                            0 TGT
                                        </div>
                                    </div>
                                    <div className="card-li">
                                        <div className="card-li-text">
                                            My Matched Loan Orders
                                        </div>
                                        <div className="card-li-value">
                                            4,925.10 TGT
                                        </div>
                                    </div>
                                    <div className="card-li">
                                        <div className="card-li-text">
                                            My Matched Borrowing Orders
                                        </div>
                                        <div className="card-li-value">
                                            0.00 TGT
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="custom-col-2 mt-40">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                TOTAL MEMBER
                            </div>
                            <div className="cardS-content">
                                SYSTEM 414 MEMBER
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-col-2 mt-40">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                TOTAL LOAN
                            </div>
                            <div className="cardS-content">
                                SYSTEM $ 266,660.94
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-col-2 mt-40">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                TOTAL BORROWING
                            </div>
                            <div className="cardS-content">
                                SYSTEM <br /> $ 819.94
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-col-2 mt-40">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                TOTAL PROFIT
                            </div>
                            <div className="cardS-content">
                                PERSONAL <br /> 867 USD
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-col-2 mt-40">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                TOTAL BONUS
                            </div>
                            <div className="cardS-content">
                                PERSONAL <br /> 2,660.28 USD
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mt-40">
                    <div className="cardL">
                        <img src="/assets/img/frame - 04.png" alt="" className="cardL-bg" />
                        <div className="cardL-main">
                            <div className="cardL-title fradient-text centering">
                                PERSONAL LENDING SUMMARY
                            </div>
                            <div className="cardL-content">
                                <div className="cardL-content-left centering">
                                    <img src="/assets/img/hh - 02.png" alt="" className="cardL-content-img" />
                                    <div className="cardL-content-text">
                                        RANK : TRAINEE
                                    </div>
                                </div>
                                <div className="cardL-content-right">
                                    <div className="card-ul">
                                        <div className="card-li">
                                            <div className="card-li-text">
                                                PERSONAL LENDING
                                            </div>
                                            <div className="card-li-value">
                                                1,174 USDT
                                            </div>
                                        </div>
                                        <div className="card-li">
                                            <div className="card-li-text">
                                                DIRECT LENDERS
                                            </div>
                                            <div className="card-li-value">
                                                4,439 USDT
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 mt-40">
                    <div className="cardL">
                        <img src="/assets/img/frame - 04.png" alt="" className="cardL-bg" />
                        <div className="cardL-main">
                            <div className="cardL-title fradient-text centering">
                                MEMBER
                            </div>
                            <div className="cardL-content">
                                <div className="cardL-content-left centering">
                                    <img src="/assets/img/hh - 01.png" alt="" className="cardL-content-img" />
                                    <div className="cardL-content-text">
                                        MEMBER: NONE
                                    </div>
                                </div>
                                <div className="cardL-content-right">
                                    <div className="card-ul">
                                        <div className="card-li">
                                            <div className="card-li-text">
                                                LOCK
                                            </div>
                                            <div className="card-li-value">
                                                0 TGT
                                            </div>
                                        </div>
                                        <div className="card-li">
                                            <div className="card-li-text">
                                                DATE
                                            </div>
                                            <div className="card-li-value">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="primary-button">
                                        JOIN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
