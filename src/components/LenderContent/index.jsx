import React,{useState} from 'react'

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function LenderConten() {
  const [loanTerm, setLoanTerm] = useState(0);

  const handleChange = (event) => {
    setLoanTerm(event.target.value);
  };
  return (
    <div className="row height-100">
        <div className="col-xl-6">
            <div className="title-input">
                Loan Amount (TGT)
            </div>
            <div className="wrap-border-input">
                <input type="number" className="primary-input" placeholder="0"/>
            </div>
        </div>

        <div className="col-xl-6">
            <div className="title-input">
                Loan Amount (USDT)
            </div>
            <div className="wrap-border-input">
                <input type="number" className="primary-input" placeholder="0"/>
            </div>
        </div>

        <div className="col-xl-6 mt-10">
            <div className="title-input">
                Daily Interest(%)
            </div>
            <div className="wrap-border-input">
                <input type="number" className="primary-input" placeholder="0.25"/>
            </div>
        </div>

        <div className="col-xl-6 mt-10">
            <div className="title-input">
                Loan Term
            </div>
            <div className="wrap-border-select">
                <Select
                    value={loanTerm}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{ 
                        fontSize: 18,
                        fontWeight: '500',
                        fontStyle: 'italic',
                        color: '#757575',
                        backgroundColor: '#fff'
                    }}
                    >
                    <MenuItem style={{ fontSize: 14}}  value={0}>
                       150 days
                    </MenuItem>
                    <MenuItem style={{ fontSize: 14}} value={1}>90 days</MenuItem>
                    <MenuItem style={{ fontSize: 14}} value={2}>30 days</MenuItem>
                </Select>
            </div>
        </div>

        <div className="col-xl-12 mt-10">
            <div className="title-input">
                2FA or Password
            </div>
            <div className="wrap-border-input">
                <input type="password" className="primary-input"/>
            </div>
        </div>

        <div className="col-xl-12 centering">
            <div className="primary-button width-30 white-text font-size-14 mt-8">
                LEND
            </div>
        </div>
    </div>
  )
}
