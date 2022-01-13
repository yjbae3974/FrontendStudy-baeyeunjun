import React from 'react'
import '../../style/AntDesign.css'
import GetStart from './GetStart'
import ButtonExample from './ButtonExample'
import LayoutExample from './LayoutExample'
export default function AntDesignExample() {
    //리앵ㄱ트 기반. day.js 통해 moment.js제거 추천. 단순한 컴포너넌트 제공 뿐 만아니라 설명도 잘 되어있음.
    return (
        <>
        {/* <div style={{margin: 'auto'}}>
            <GetStart></GetStart>
        </div>
        <ButtonExample></ButtonExample> */}
        <LayoutExample />
        </>
    )
}
