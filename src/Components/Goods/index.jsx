
import React from 'react'
import './index.css'

import { Tag, Swiper } from 'antd-mobile'

import cover1 from '../../Static/cover1.jpg'
import cover2 from '../../Static/cover2.jpg'
import cover3 from '../../Static/cover3.jpg'
import cover4 from '../../Static/cover4.jpg'

const pic = [cover1, cover2, cover3, cover4];
const rank = 3;
const items = pic.map((picName, index) => (
    <Swiper.Item key={index}>
        <div>
            <img src={picName} alt="" srcset="" style={{ width: "100%" }} />
        </div>
    </Swiper.Item>
))

function Goods() {
    const activity = ["退货补运费", "假一赔九", "支持7天无理由退货"]
    return (
        <>
            <Swiper >
                {items}
            </Swiper>
            <div className='mcInfo'>
                <div className="priceInfo">
                    <div className="price">
                        <div>￥<span className='priceNum'>6.9</span></div>
                        <div className="discount">新人价￥0.01&nbsp;&gt;</div>
                    </div>
                    <div className="saleamount">已售6409件</div>
                </div>
                <div className="goodName">
                    <div>
                        <Tag color='#FDEEF3' style={{ 'fontSize': '1.1rem', '--text-color': '#FC436C' }}>满6.90减6.89</Tag>
                        <div>
                            <Tag color='#F25752'>新人专享</Tag>&nbsp;
                            <Tag color='#EA9545'>预售</Tag>&nbsp;
                            <span className='name'>康师傅冰糖雪梨果汁饮料饮品330mL*3瓶</span>
                        </div>
                    </div>
                    <div className='ticket'>领券&nbsp;&gt;</div>
                </div>

                <div className="activity">
                    <div>{activity.map((val, index, arr) => {
                        if (index < arr.length - 1) {
                            return val + "&";
                        }
                        return val;
                    })}</div>
                    <div>&gt;</div>
                </div>
                <div className="logistics">
                    <div>15天内发货【受疫情影响可能延迟配送】</div>
                    <div className='right'>包邮</div>
                </div>
                <div className="logistics">
                    快手[饮料]销量榜第<span>{rank}</span>名
                </div>
            </div>
        </>
    )
}

export default Goods