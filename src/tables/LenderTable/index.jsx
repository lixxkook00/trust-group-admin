import React from 'react'

export default function LenderTable() {
  return (
    <div style={{display: 'flex',flexDirection: 'column',height: '100%'}}>
      <div className="custom-thead">
        <div>Token</div>
        <div>Interest</div>
        <div>Amount</div>
        <div>Term</div>
      </div>
      <div className="wrap-table">
        <table className="table table-default">
          <tbody >
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.35</td>
                <td className="td-4">16,679.20</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.41</td>
                <td className="td-4">1,552.80</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.46</td>
                <td className="td-4">212.00</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.50</td>
                <td className="td-4">25,888.50</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.51</td>
                <td className="td-4">12,143.70</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.52</td>
                <td className="td-4">2,410.50</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.54</td>
                <td className="td-4">40,000.00</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.55</td>
                <td className="td-4">1,919.00</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.57</td>
                <td className="td-4">3,522.40</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.60</td>
                <td className="td-4">5,000.00</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.65</td>
                <td className="td-4">6,000.00</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.66</td>
                <td className="td-4">3,170.10</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.70</td>
                <td className="td-4">3,241.00</td>
                <td className="td-4">150 days</td>
              </tr>
              <tr>
                <td className="td-4">TGT</td>
                <td className="td-4">0.75</td>
                <td className="td-4">250.00</td>
                <td className="td-4">150 days</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
