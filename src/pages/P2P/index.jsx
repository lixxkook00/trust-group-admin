import React from 'react'
import './P2P.scss'

import Cart4 from '../../components/Cart4'

export default function P2P() {
  return (
    <div className="col-xl-12">
      <div className="p2p">
        <div className="row">
            <div className="col-xl-3 mt-40">
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
             <div className="col-xl-3 mt-40">
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
             <div className="col-xl-3 mt-40">
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
             <div className="col-xl-3 mt-40">
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
        </div>
      </div>
    </div>
  )
}
