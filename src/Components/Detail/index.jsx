import React from 'react'
import './index.css'

import detail1 from '../../Static/detail1.jpg'
import detail2 from '../../Static/detail2.jpg'
import detail3 from '../../Static/detail3.jpg'
import detail4 from '../../Static/detail4.jpg'
import detail5 from '../../Static/detail5.jpg'
import detail6 from '../../Static/detail6.jpg'

const detail = {
    type: ['品牌', '食品生产许可证编号', '是否进口', '产地', '净含量', '保质期', '规格包装', '是否为功能性饮料'],
    content: ['康师傅', 'SC06', '否', '天津', '330毫升', '12个月', '瓶装', '否']
}
const detailImgList = [detail1, detail2, detail3, detail4, detail5, detail6];
function Detail() {
    return (
        <div className='detail'>
            <div className='title'>
                商品详情
            </div>
            <div className="info">
                {detail.type.map((val, index) => {
                    return (
                        <div key={index} className='detailItem'>
                            <div className="type">{val}</div>
                            <div className="content">{detail.content[index]}</div>
                        </div>
                    )
                })}
            </div>
            <div>
                {detailImgList.map((img, index) => {
                    return (
                        <div key={index} className='detailImg'>
                            <img src={img} alt="" srcset="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Detail