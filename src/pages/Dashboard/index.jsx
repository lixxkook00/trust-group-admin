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

                {/* content text */}
                <div className="col-xl-12 font-size-18">
                    <div className="content-text primary-border mt-10 pd-20">
                       <div className="centering fradient-text font-size-18 font-weight-600 tac">
                            THE SECRET OF LIVING A PEACEFUL AND PROSPEROUS LIFE WITH TRUST GROUP WITH ???CAR BONUS FUND??? AND ???HOUSING BONUS FUND???
                       </div>
                       <span className="fradient-text">
                           I. CAR BONUS FUND
                       </span>
                       <p className="section-num">
                           1. Conditions:
                       </p>
                       <p>
                           - Loan turnover of 5 different lines, each line reached {`>`}= $ 100,000
                       </p>
                       <p>
                           - Sales of personal loans reached {`>`}= $ 5,000
                       </p>
                       <p>
                           - Sales will be accumulated until the conditions are met (Successful loan turnover will start calculating from September 1, 2021).
                       </p>
                       <p className="section-num">
                           2. Benefits:
                       </p>
                       <p>
                           - $ 10,000 instantly received, and $ 500 continuously received for next 24 months.
                       </p>
                       <span className="fradient-text">
                           II. HOUSING BONUS FUND
                       </span>
                       <p className="section-num">
                           1. Conditions:
                       </p>
                       <p>
                           - Loan turnover of 5 different lines, each line reached {`>`}= $ 500,000
                       </p>
                       <p>
                           - Sales of personal loans reached {`>`}= $ 10,000
                       </p>
                       <p>
                           - Sales will be accumulated until the conditions are met (Successful loan turnover will start calculating from September 1, 2021).
                       </p>
                       <p className="section-num">
                           2. Benefits:
                       </p>
                       <p>
                           - $ 40,000 instantly received, and $ 1,000 continuously received for next 36 months.
                       </p>
                       <span className="fradient-text">
                          III. NOTE:
                       </span>
                        <p>
                            - This program applies to all Global TRUST GROUP markets;
                        </p>  
                        <p>
                            - This program will start from September 1, 2021 until customers meet the conditions to receive the rewards;
                        </p>  
                        <p>
                            - If you have received a CAR BONUS, the loan turnover will start to be calculated until the conditions for receiving the HOUSING BONUS FUND are met;
                        </p>  
                        <p>
                            - The rewards will be transferred to your wallet on TRUST GROUP back-office;
                        </p>  
                        <p>
                            - The new LOAN turnover is calculated from the following sources: deposit, internal transfer, personal owned TGT;
                        </p>  
                        <p>
                            - The LOAN sales will not be counted from any terminated contract;
                        </p>  
                        <p>
                            - The Borrowing turnover is not counted from our P2P Lending Program;
                        </p>  
                        <p>
                            - A congratulatory email and notification will be sent out to customers who are eligible to receive the rewards;
                        </p>  
                        <p>
                            - A bonus of $ 10,000 or $ 40,000 will be sent to you within 72 hours when the conditions are met;
                        </p>  
                        <p>
                            - Customers are required to use their prize money to own a car according to the purpose of the ???CAR BONUS FUND??? program. And send a proof of car ownership information to this email address: support@tgtholding.com.
                        </p>  
                        <p>
                            - An extra Bonus of $ 500 per month for 24 months from the time when conditions are met, and verified by our support department with full ownership documents. The sooner you own a car, the faster you will receive your monthly bonus.
                        </p>  
                        <p>
                            - Customers are required to use their prize money to own a house according to the purpose of the ???HOUSING BONUS FUND??? program. And send a proof of home ownership information to this email address: support@tgtholding.com.
                        </p>  
                        <p>
                            - An extra Bonus of $ 1,000 per month for 36 months from the time when conditions are met, and verified by our support department with full ownership documents. The sooner you own a house, the faster you will receive your monthly bonus.
                        </p>  
                        <p>
                            - For more assistance or support, please contact our marketing team or email: support@tgtholding.com
                        </p>
                        <span className="fradient-text">
                          BUILDING YOUR LIFE WITH TRUST GROUP
                       </span>
                       <span className="fradient-text">
                          TRUST GROUP ??? TRUST IS THE FIRST.
                       </span>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
