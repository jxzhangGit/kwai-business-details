import React from 'react'
import './index.css'

import cover1 from '../../Static/cover1.jpg'
import cover2 from '../../Static/cover2.jpg'

const commentList = [{ buyerName: 'a', buyerProfile: cover1, buyerText: '太贵了', imgList: [cover1, cover2] },
{ buyerName: 'b', buyerProfile: cover1, buyerText: '该用户没有填写评价，但认为该商品值得买', imgList: [] }];
const anotherCommentList = ["价格实惠 602", "美味可口 598", "物超所值 328", "好喝不腻 312", "价格给力 78", "性价比高 58"];
function Comments() {
    return (
        <div className='comments'>
            <div className="titleNav">
                <div className="left">商品评价</div>
                <div className="right">共52条&gt;</div>
            </div>
            <div className="buyerComment">
                {commentList.map((comment, index) => {
                    return (<div key={index}>
                        <div className="buyer">
                            <div className="buyerProfile">
                                <img src={comment.buyerProfile} alt="" srcset="" />
                            </div>
                            <div className="buyerName">
                                {comment.buyerName}
                            </div>
                        </div>
                        <div className="commentInfo">
                            <div className="commentText">{comment.buyerText}</div>
                            {comment.imgList.length > 0 ?
                                comment.imgList.map((img, index) => {
                                    return (
                                        <img key={index} className='commentImg' src={img} alt="" srcset="" />
                                    )
                                }) : null}
                        </div>
                    </div>)
                })}
            </div>
            <div className="titleNav">
                <div className="left">该店铺其他商品评价</div>
                <div className="right">查看全部&gt;</div>
            </div>
            <div className="anotherComment">
                {anotherCommentList.map((val, index) => {
                    return (
                        <div key={index} className="another">{val}</div>
                    )
                })}
            </div>

        </div>
    )
}

export default Comments