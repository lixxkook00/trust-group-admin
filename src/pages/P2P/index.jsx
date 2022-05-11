import React,{useState} from 'react'
import './P2P.scss'

import LenderContent from '../../components/LenderContent'
import BorrowerContent from '../../components/BorrowerContent'
import LenderTable from '../../tables/LenderTable'
import LoanStatusTable from '../../tables/LoanStatusTable'
import MyCertificateStatusTable from '../../tables/MyCertificateStatusTable'

export default function P2P() {
    const [contentFormActive,setContentFormActive] = useState(0)
    const [contentChartActive,setContentChartActive] = useState(0)
    const [contentTableActive,setContentTableActive] = useState(0)

    return (
        <div className="col-xl-12">
        <div className="p2p">
            <div className="row">
                {/* list card value */}
                <div className="col-xl-3 mt-20">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                Price TGT
                            </div>
                            <div className="cardS-content">
                                $ 3.0313
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 mt-20">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                24h Lending
                            </div>
                            <div className="cardS-content">
                                12,138.9 TGT
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 mt-20">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                24h Borrowing
                            </div>
                            <div className="cardS-content">
                                12,138.9 TGT
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 mt-20">
                    <div className="cardS">
                        <img src="/assets/img/frame - 03.png" alt="" className="cardS-bg" />
                        <div className="cardS-main">
                            <div className="cardS-title fradient-text centering">
                                Total Loan
                            </div>
                            <div className="cardS-content">
                                18,391,204.8 TGT
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mt-20">
                    <div className="cartXXL">
                        <img className="cartXXL-bg" src="/assets/img/cartXXL.png" alt="" />
                        <div className="cartXXL-main">

                            {/* title */}
                            <div className="cartXXL-title centering justify-space-between">
                                <div className="pagination white-text">
                                    <div className={`pagination-item ${contentFormActive === 0 ? 'active' : ''}`} onClick={() => setContentFormActive(0)}>
                                        LENDER
                                    </div>
                                    <div className={`pagination-item ${contentFormActive === 1 ? 'active' : ''}`} onClick={() => setContentFormActive(1)}>
                                        BORROWER
                                    </div>
                                    <div 
                                        className="pagination-bg-active"
                                        style={
                                            contentFormActive === 1 
                                            ? 
                                            {
                                                transform: 'translateX(90px)',
                                                width: 130
                                            } 
                                            :
                                            {}
                                        }
                                    >
                                    </div>
                                </div>
                                <div className="fradient-text">
                                    $ 2.8721
                                </div>
                            </div>

                            {/* content */}
                            <div className="cartXXL-content pd-10">
                                {
                                    contentFormActive === 0
                                    ?
                                    <LenderContent />
                                    :
                                    <BorrowerContent />
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mt-20">
                    <div className="cartXXL">
                        <img className="cartXXL-bg" src="/assets/img/cartXXL.png" alt="" />
                        <div className="cartXXL-main">

                            {/* title */}
                            <div className="cartXXL-title centering justify-space-between">
                                <div className="pagination white-text">
                                    <div className={`pagination-item ${contentChartActive === 0 ? 'active' : ''}`} onClick={() => setContentChartActive(0)}>
                                        LENDER
                                    </div>
                                    <div className={`pagination-item ${contentChartActive === 1 ? 'active' : ''}`} onClick={() => setContentChartActive(1)}>
                                        BORROWER
                                    </div>
                                    <div 
                                        className="pagination-bg-active"
                                        style={
                                            contentChartActive === 1 
                                            ? 
                                            {
                                                transform: 'translateX(90px)',
                                                width: 130
                                            } 
                                            :
                                            {}
                                        }
                                    >
                                    </div>
                                </div>
                            </div>

                            {/* content */}
                            <div className="cartXXL-content pd-10">
                                {
                                    contentChartActive === 0
                                    ?
                                    <LenderTable />
                                    :
                                    <LenderTable />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="col-xl-12 mt-20  mb-20">
                    <div className="cartXXL">
                        <img className="cartXXL-bg" src="/assets/img/table.png" alt="" />
                        <div className="cartXXL-main">

                            {/* title */}
                            <div className="cartXXL-title centering justify-space-between">
                                <div className="pagination white-text width-100">
                                    <div className={`pagination-item width-33 tac ${contentTableActive === 0 ? 'active' : ''}`} onClick={() => setContentTableActive(0)}>
                                        MY LOAN STATUS
                                    </div>
                                    <div className={`pagination-item width-33 tac ${contentTableActive === 1 ? 'active' : ''}`} onClick={() => setContentTableActive(1)}>
                                        MY BORROWING STATUS
                                    </div>
                                    <div className={`pagination-item width-33 tac ${contentTableActive === 2 ? 'active' : ''}`} onClick={() => setContentTableActive(2)}>
                                        MY CERTIFICATE
                                    </div>
                                    <div 
                                        className="pagination-bg-active width-33 left-2 bottom-14"
                                        style={{transform: `translateX(${contentTableActive*100}%)`}}
                                    >
                                    </div>
                                </div>
                            </div>

                            {/* content */}
                            <div className="cartXXL-content pd-10">
                                { contentTableActive === 0 && <LoanStatusTable />}
                                { contentTableActive === 1 && <LoanStatusTable />}
                                { contentTableActive === 2 && <MyCertificateStatusTable />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
