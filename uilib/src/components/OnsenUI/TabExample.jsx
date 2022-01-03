import React from "react";
import { Button, Toast } from "react-onsenui";
export default function TabExample() {
  return (
    <>
      <p>
        <Button onClick="ons.notification.toast('Hi there!', { timeout: 1000, animation: 'fall' })">
          Queue notification toast (top)
        </Button>

        <br />

        <Button onClick="myToast.toggle()">
          Toggle element toast (bottom)
        </Button>
      </p>
      <Toast id="myToast" animation="ascend">
        FABs up!
        <button onClick="myToast.hide()">ok</button>
      </Toast>
    </>
  );
}
