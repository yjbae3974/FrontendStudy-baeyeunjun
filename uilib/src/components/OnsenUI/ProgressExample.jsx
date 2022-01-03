import React from 'react'
import { ProgressBar, ProgressCircular } from 'react-onsenui'
export default function ProgressExample() {
    return (
        <div>
            <ProgressBar value="15"></ProgressBar>
            <div style={{height: '30px'}}></div>
            <ProgressBar indeterminate></ProgressBar>
            <ProgressCircular indeterminate></ProgressCircular>
        </div>
    )
}
