import React,{useState} from 'react'
import {Page, Button, ActionSheet, ActionSheetButton} from 'react-onsenui'

export default function ActionSheetExample() {
    const [open, setopen] = useState(false)
    const handleClick = () =>{
        alert('pressed')
        setopen((prev)=>!prev)
    }
    return (
        <div>
            <Button onClick={handleClick}>Action Sheet Open</Button>
            <ActionSheet isOpen={open} title="action sheet">
                <ActionSheetButton>label 1</ActionSheetButton>
                <ActionSheetButton>label 2</ActionSheetButton>
                <ActionSheetButton>label 3</ActionSheetButton>
                <ActionSheetButton modifier='destructive'>Cancel</ActionSheetButton>
                <ActionSheetButton>Save</ActionSheetButton>
            </ActionSheet>
        </div>
    )
}
