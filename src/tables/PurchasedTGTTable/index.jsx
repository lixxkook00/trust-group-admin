import React from 'react'
import './PurchasedTGTTable.scss'

export default function PurchasedTGTTable() {
  return (
    <div style={{display: 'flex',flexDirection: 'column',height: '100%'}}>
      <div className="wrap-table text-start ito-bonus-table" >
        <table class="table table-default">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Amount ($)</th>
                    <th>TGT</th>
                    <th>Rate ($)</th>
                    <th>Request Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>164.00</td>
                    <td>1,197.08</td>
                    <td>0.137</td>
                    <td>2021-03-30 03:07:16</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>17.80</td>
                    <td>137.98</td>
                    <td>0.129</td>
                    <td>2021-03-22 05:30:01</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>25.00</td>
                    <td>201.61</td>
                    <td>0.124</td>
                    <td>2021-03-16 10:22:07</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>100.00</td>
                    <td>819.67</td>
                    <td>0.122</td>
                    <td>2021-03-14 11:04:32</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
