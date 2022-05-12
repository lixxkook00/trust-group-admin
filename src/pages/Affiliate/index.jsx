import React from 'react'
import './Affiliate.scss'
import TreeMenu from 'react-simple-tree-menu'
import TreeViewMenu from 'react-simple-tree-menu'
import {ListGroupItem, Input, ListGroup } from 'reactstrap';

import Cart4 from '../../components/Cart4'

const treeData = [
  {
    key: 'first-level-node-1',
    label: 'saigon2021  - Hoàng thị nho -  ( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
    nodes: [
      {
        key: 'second-level-node-1',
        label: 'ab6879  - NGUYEN DANG HA -  ( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
        nodes: [
          {
            key: 'third-level-node-1',
            label: 'tamdan68  -  Nguyễn tâm Đan -   ( Member: 28 - Personal Lending: 0.00 - System Lending: 0.00 )',
            nodes: [] // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
      {
        key: 'second-level-node-2',
        label: 'van68  -  HOÀNG THU VAN -  ( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
        nodes: [
          {
            key: 'third-level-node-2',
            label: 'typhubacha68  - Chu Thi Hiền -   ( Member: 28 - Personal Lending: 0.00 - System Lending: 0.00 )',
            nodes: [] // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
    ],
  },
];

const treeData2 = [
  {
    key: 'first-level-node-1',
    label: '  -  -  ',
    id:'saigon2021',
    fullName:'Hoàng thị nho',
    desc:'( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
    nodes: [
      {
        key: 'second-level-node-1',
        label: 'ab6879  - -  ',
        id:'ab6879',
        fullName:' NGUYEN DANG HA',
        desc:'( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
        nodes: [
          {
            key: 'third-level-node-1',
            label: 'tamdan68  -  Nguyễn tâm Đan -   ( Member: 28 - Personal Lending: 0.00 - System Lending: 0.00 )',
            id:'tamdan68',
            fullName:' Nguyễn tâm Đan',
            desc:'( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
            nodes: [] // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
      {
        key: 'second-level-node-2',
        label: 'van68  -  HOÀNG THU VAN -  ( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
        id:'van68',
        fullName:' HOÀNG THU VAN',
        desc:'( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
        nodes: [
          {
            key: 'third-level-node-2',
            label: 'typhubacha68  - Chu Thi Hiền -   ( Member: 28 - Personal Lending: 0.00 - System Lending: 0.00 )',
            id:'typhubacha68',
            fullName:' Chu Thi Hiền',
            desc:'( Member: 414 - Personal Lending: 0.00 - System Lending: 0.00 )',
            nodes: [] // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
    ],
  },
];

const DEFAULT_PADDING = 16;
const ICON_SIZE = 8;
const LEVEL_SPACE = 30;

const ToggleIcon = ({ on }) => <span style={{ marginRight: 8 }}>{on ? '-' : '+'}</span>;

const ListItem = ({
  level = 0,
  hasNodes,
  isOpen,
  label,
  id,
  fullName,
  desc,
  searchTerm,
  openNodes,
  toggleNode,
  matchSearch,
  focused,
  ...props
}) => (
  <ListGroupItem
    {...props}
    style={{
      paddingLeft: DEFAULT_PADDING + ICON_SIZE + level * LEVEL_SPACE,
      cursor: 'pointer',
      boxShadow: focused ? '0px 0px 5px 0px #222' : 'none',
      zIndex: focused ? 999 : 'unset',
      position: 'relative',
    }}
  >
    {hasNodes && (
      <div
        style={{ display: 'inline-block' }}
        onClick={e => {
          hasNodes && toggleNode && toggleNode();
          e.stopPropagation();
        }}
      >
        <ToggleIcon on={isOpen} />
      </div>
    )}
        {/* <i className="fa-solid fa-pipe affiliate-tree-icon"></i> */}
        |
        <span className="affiliate-tree-id">
            {id} 
        </span> 
        - 
        <span className="fradient-text">
            {fullName}
        </span> 
        - 
        {desc}
  </ListGroupItem>
);


export default function Affiliate() {
  return (
    <div className="col-xl-12">
        <div className="affiliate">
            <div className="row mt-20">
                 <Cart4 
                    title={"TGT ITO ACCOUNT"}
                    value={"0.3 TGT"}
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
            </div>

            {/* FORM LINK */}
            <div className="affiliate-form">
                <div className="affiliate-form-title">
                    Ref Link
                </div>
                <div className="row">
                    <div className="col-xl-9">
                        <input type="text" className="affiliate-form-input primary-input" value={"https://tgtholding.com/sign-up/saigon2021.html"}/>
                    </div>
                    <div className="col-xl-3">
                        <button className="affiliate-form-btn clear-btn centering">
                            COPY
                        </button>
                    </div>
                </div>
            </div>

            {/* AFFILIATE TREE */}
            <div className="affiliate-tree">
                <TreeViewMenu
                data={treeData2}
                onClickItem={({ key, label, ...props }) => {
                    this.navigate(props.url); // user defined prop
                }}
                debounceTime={125}>
                    {({ search, items }) => (
                        <>  
                            <div className="wrap-border-input">
                                <Input onChange={e => search(e.target.value)} placeholder="Nhập ID để tìm kiếm..." className="primary-input"/>
                            </div>
                            <ListGroup>
                                {
                                    items.map(props => (
                                        <ListItem {...props} />
                                    ))
                                }
                            </ListGroup>
                        </>
                    )}
                </TreeViewMenu>
            </div>
        </div>
    </div>
  )
}
