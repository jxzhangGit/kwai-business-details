import React, { useState } from 'react'
import SpecAdjoinMatrix from '../../utils/specToAdjoin'
import './index.css'

import detail1 from '../../Static/detail1.jpg'

import sku from './data.json'
const { specList, specCombinationList } = sku;
function SKUSelector() {
    const [specsS, setSpecsS] = useState(Array(specList.length).fill(0));
    // 创建一个规格矩阵
    const specAdjoinMatrix = new SpecAdjoinMatrix(specList, specCombinationList);
    console.log(specAdjoinMatrix);
    // 获得可选项表
    const optionSpecs = specAdjoinMatrix.getSpecscOptions(specsS);

    const handleClick = function(bool, text, index) {
        // 排除可选规格里面没有的规格
        if (specsS[index] !== text && !bool) return;
        // 根据text判断是否已经被选中了
        specsS[index] = specsS[index] === text ? "" : text;
        setSpecsS(specsS.slice());
        console.log('specsS', specsS);
      };
    
    return (
        <div className='popup'>
            <div className="sku">
                <div className='skuImg'>
                    <img src={detail1} alt="" />
                </div>
                <div className='skuInfo'>
                    <div className="price">￥<span>{sku.price}</span></div>
                    <div className="inventory">库存：{sku.inventory}</div>
                    <div className="select">请选择规格</div>
                </div>
            </div>
            <div className="selector">
                {specList.map(({ title, list }, i) => {
                    return (
                        <div key={i}>
                            <div className="title">{title}</div>
                            <div className='option'>
                                {list.map((value, index) => {
                                    const isOption = optionSpecs.includes(value); // 当前规格是否可选
                                    const isActive = specsS.includes(value); // 当前规格是否被选
                                    return (
                                        <div key={index}
                                        className={
                                            `${isOption?'specOption ':'specDisabled '}${isActive?'specActive ':' '}`
                                        }
                                        onClick={() => handleClick(isOption, value, i)}
                                        >{value}</div>
                                    )
                                })}
                            </div>
                        </div>

                    )
                })}
            </div>
            <div className='popupBottom'>
                <div className="amount">
                    <div className="limitation">
                        数量<span>限购{sku.limitation}件</span>
                    </div>
                </div>
                <div className="cofirm">
                    立即购买
                </div>
            </div>
        </div>
    )
}

export default SKUSelector;