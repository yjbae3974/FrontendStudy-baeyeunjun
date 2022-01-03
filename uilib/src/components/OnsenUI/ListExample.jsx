import React from 'react'
import {List,ListItem,ListHeader, Icon, Switch} from 'react-onsenui'


export default function ListExample() {
    return (
        <div>
            <List>
    <ListHeader>Default</ListHeader>
    <ListItem>Item A</ListItem>
    <ListItem>Item B</ListItem>

    <ListHeader>Expandable</ListHeader>
    <ListItem expandable>
      Tap to expand
      <div class="expandable-content">Expandable content</div>
    </ListItem>

    <ListHeader>Tappable / Ripple</ListHeader>
    <ListItem tappable>Tap me</ListItem>

    <ListHeader>Chevron</ListHeader>
    <ListItem modifier="chevron" tappable>Chevron</ListItem>

    <ListHeader>Thumbnails and titles</ListHeader>
    <ListItem>
      <div class="left">
        <Icon icon="md-zoom-in"></Icon>
      </div>
      <div class="center">
        <span class="listItem__title">Cutest kitty</span><span class="listItem__subtitle">On the Internet</span>
      </div>
    </ListItem>

    <ListHeader>Icons</ListHeader>
    <ListItem>
      <div class="left">
        <Icon icon="md-face" class="listItem__icon"></Icon>
      </div>
      <div class="center">
        Icon
      </div>
    </ListItem>

    <ListHeader>Switch</ListHeader>
    <ListItem>
      <div class="center">
        Turn it on
      </div>
      <div class="right">
        <Switch></Switch>
      </div>
    </ListItem>

    <ListHeader>Switch and icon</ListHeader>
    <ListItem>
      <div class="left">
        <Icon icon="md-face" class="listItem__icon"></Icon>
      </div>
      <div class="center">
        Icon and switch
      </div>
      <div class="right">
        <Switch></Switch>
      </div>
    </ListItem>

    <ListHeader>No divider</ListHeader>
    <ListItem modifier="nodivider">Item A</ListItem>
    <ListItem modifier="nodivider">Item B</ListItem>

    <ListHeader>Long divider</ListHeader>
    <ListItem modifier="longdivider">Item A</ListItem>
    <ListItem modifier="longdivider">Item B</ListItem>
  </List>

  <br />

  <List modifier="inset">
    <ListHeader>Inset list</ListHeader>
    <ListItem modifier="longdivider">Item A</ListItem>
    <ListItem modifier="longdivider">Item B</ListItem>
  </List>
        </div>
    )
}
