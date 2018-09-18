import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import App from './App'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')
Modal.setAppElement(MOUNT_NODE)

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  )
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
