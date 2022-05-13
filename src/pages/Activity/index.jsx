import React from 'react'
import './Activity.scss'

// import AffiliateBonusTable from '../../tables/AffiliateBonusTable'
// import ITOBonusTable from '../../tables/ITOBonusTable'
// import PurchasedTGTTable from '../../tables/PurchasedTGTTable'
import P2PLendingBonusTable from '../../tables/P2PLendingBonusTable'

export default function Activity() {
  return (
    <div className="col-xl-12">
        <div className="activity">
            {/* <AffiliateBonusTable/> */}
            {/* <ITOBonusTable /> */}
            {/* <PurchasedTGTTable /> */}
            <P2PLendingBonusTable />
        </div>
    </div>
  )
}
