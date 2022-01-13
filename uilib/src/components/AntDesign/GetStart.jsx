import React, {useState} from 'react'
import {DatePicker, message, Alert} from 'antd'
export default function GetStart() {
    const [date, setDate] = useState(null)
    const handleChange = (val) =>{
        message.info(
            `selected date: ${val ? val.format("YYYY-MM-DD") : "None"}`
        )
        setDate(val)
    }
    return (
        <div style={{margin: '100px auto', width: '400px'}}>
            <DatePicker onChange={handleChange} />
            <div style={{marginTop: '16px'}}>
                <Alert
                    message="selected Date"
                    description={date ? date.format("YYYY-MM-DD") : "None"}></Alert>
                
            </div>
        </div>
    )
}
