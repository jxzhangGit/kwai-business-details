import React, { useEffect, useState, createRef } from 'react'
import './index.css'

import { SpinLoading } from 'antd-mobile'

import cardList from './cardList';

function Ulike() {
    const ref = createRef();
    const [loading, setLoading] = useState(false);
    const [leftHeight, setLeftHeight] = useState(0);
    const [rightHeight, setRightHeight] = useState(0);
    const [leftImgList, setLeftImgList] = useState([]);
    const [rightImgList, setRightImgList] = useState([]);
    const [newCardList, setNewCardList] = useState([]);
    const [newCardId, setNewCardId] = useState('');
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setLoading(true);
                    if (newCardList.length === 0) {
                        setTimeout(() => {
                            setNewCardList([...cardList.list]);
                        }, 1000);
                    }
                    // observer.unobserve(entry.target);
                } else {
                    setLoading(false);
                }
            });
        });
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        }
    });

    useEffect(() => {
        console.log('newCardId', newCardId, leftHeight, rightHeight);
        if (newCardId === '') return;
        const cardEle = document.getElementById(newCardId);
        const pos = cardEle.offsetTop + cardEle.offsetHeight;
        cardEle.firstElementChild.onload = function (e) {
            console.log("======",e,cardEle.firstElementChild.complete);
            if (newCardId[0] === 'l') {
                setLeftHeight(pos);
            } else {
                setRightHeight(pos);
            }
            setNewCardList(newCardList.slice(1));
        }
    }, [newCardId]);

    useEffect(() => {
        console.log('newCardList', leftHeight, rightHeight);
        if (newCardList.length === 0) return;
        const newCard = newCardList[0];
        if (leftHeight <= rightHeight) {
            setLeftImgList([...leftImgList, newCard]);
            setNewCardId(`l${leftImgList.length}`);
        } else {
            setRightImgList([...rightImgList, newCard]);
            setNewCardId(`r${rightImgList.length}`);
        }
    }, [newCardList]);
    return (
        <div className='uLike'>
            <div className='title'>
                猜你喜欢
            </div>
            <div className="infiniteScroll">
                <div className="left">
                    {leftImgList.map(({ img, text }, index) => {
                        return (<div className="card" key={index} id={`l${index}`}>
                            <img src={img} alt="" srcset="" />
                            <p>{`${text}l${index}`}</p>
                        </div>)
                    })}
                </div>
                <div className="right">
                    {rightImgList.map(({ img, text }, index) => {
                        return (<div className="card" key={index} id={`r${index}`}>
                            <img src={img} alt="" srcset="" />
                            <p>{`${text}r${index}`}</p>
                        </div>)
                    })}
                </div>
                <div class="clearfloat"></div>
            </div>
            <div ref={ref} className='loading'>
                {
                    loading ? <SpinLoading color='default' /> : null
                }
            </div>
        </div>
    )
}

export default Ulike