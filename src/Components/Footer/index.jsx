import React, { useState } from 'react'
import './index.css'

import { Popup } from 'antd-mobile'
import { UserCircleOutline, TruckOutline, SmileOutline } from 'antd-mobile-icons'

import SKUSelect from '../SKUSelector'

function Footer() {
    const [popupVisible, setPopupVisible] = useState(false);
    return (
        <div className="footerContent">
            <div>
                <div className="top"><UserCircleOutline /></div>
                <div className="bottom">个人中心</div>
            </div>
            <div>
                <div className="top"><TruckOutline /></div>
                <div className="bottom">店铺</div>
            </div>
            <div>
                <div className="top"><SmileOutline /></div>
                <div className="bottom">客服</div>
            </div>
            <div className='purchase' onClick={() => {
                setPopupVisible(true);
            }}>
                <p className="top">领券购买</p>
                <p className="bottom">付款后15天内发货</p>
            </div>
            <Popup
                visible={popupVisible}
                onMaskClick={() => {
                    setPopupVisible(false)
                }}
                bodyStyle={{ height: '40vh' }}
            >
                <SKUSelect></SKUSelect>
            </Popup>
        </div>
    )
}

export default Footer;