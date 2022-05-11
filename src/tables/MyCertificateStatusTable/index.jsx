import React from 'react'

export default function MyCertificateStatusTable() {
  return (
    <div style={{display: 'flex',flexDirection: 'column',height: '100%'}}>
      <div className="custom-thead">
        <div>#</div>
        <div>Type</div>
        <div>Amount</div>
        <div>Term</div>
        <div>Interest</div>
        <div>Certificate</div>
        <div>DATE</div>
      </div>
      <div className="wrap-table">
        <table class="table table-default">
            <tbody>
                <tr>
                    <td className="td-7">1</td>
                    <td className="td-7">LEND</td>
                    <td className="td-7">161.1 TGT - 163.46817 USDT</td>
                    <td className="td-7">150 Days</td>
                    <td className="td-7">0.4 %</td>
                    <td className="td-7">8166da05c5</td>
                    <td className="td-7">2021-11-19</td>
                </tr>
                <tr>
                    <td className="td-7">2</td>
                    <td className="td-7">LEND</td>
                    <td className="td-7">1816 TGT - 483.056 USDT</td>
                    <td className="td-7">150 Days</td>
                    <td className="td-7">0.5 %</td>
                    <td className="td-7">8d8042386b</td>
                    <td className="td-7">2021-05-12</td>
                </tr>
                <tr>
                    <td className="td-7">3</td>
                    <td className="td-7">LEND</td>
                    <td className="td-7">2948 TGT - 527.692 USDT</td>
                    <td className="td-7">150 Days</td>
                    <td className="td-7">0.5 %</td>
                    <td className="td-7">8baa56554f</td>
                    <td className="td-7">2021-05-01</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}
