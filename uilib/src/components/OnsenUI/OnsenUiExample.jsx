import React from 'react'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import ButtonExample from './ButtonExample'
import ActionSheetExample from './ActionSheetExample';
import CheckboxExample from './CheckboxExample';
import FabExample from './FabExample';
import ListExample from './ListExample';
import ProgressExample from './ProgressExample';
import { Page } from 'react-onsenui';
export default function OnsenUiExample() {
    //특징: font awesome이 그냥 들어가있어서 icon에 그 클래스 이름 그냥 넣으면 됨. 근데 그게 font awesome뿐만 아니라 다 됨! ionic, material ui
    return (
        <Page>
            <ProgressExample></ProgressExample>
            <ButtonExample></ButtonExample>
            <ActionSheetExample></ActionSheetExample>
            <CheckboxExample></CheckboxExample>
            <ListExample></ListExample>
            <FabExample></FabExample>
        </Page>
    )
}
