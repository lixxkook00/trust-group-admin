import React from 'react'
import './Activity.scss'

import AffiliateBonusTable from '../../tables/AffiliateBonusTable'
import ITOBonusTable from '../../tables/ITOBonusTable'

export default function Activity() {
  return (
    <div className="col-xl-12">
        <div className="activity">
            {/* <AffiliateBonusTable/> */}
            <ITOBonusTable />
        </div>
    </div>
  )
}
