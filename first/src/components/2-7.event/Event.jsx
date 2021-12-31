import React from 'react'

export default function Event() {
    const handleButtonClick = (e) =>{
        console.log('button clicked')
        console.dir(e)
    }
    const handleMouseLeave = (e) =>{
        console.log('mouseLeaved')
        console.dir(e)
    }
    const handleClickCapture = () =>{
        console.log('click captured 1')
    }
    const handleClickCapture2 = () =>{
        console.log('click captured 2')
    }
    const handleclickBubble = () =>{
        console.log('bubble captured')
    }

    return (
        <>
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleclickBubble}>
            <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>click me</button>
            </div>
        </div>
        <div>먼저 가장 위에 부모가 캡처, 그 다음 자식이 캡처, 그다음 버튼이 클릭,  그 다음 부모가 버블 확인함.</div>
        </>
        
    )
}
