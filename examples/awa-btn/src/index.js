import './index.css'
import { createApp } from 'vue'
import * as React from 'react'
import * as ReactDom from 'react-dom'
import logo from './jser-logo.png'
// import add from './add'
// import svg from './heart.svg'

console.log(createApp)
console.log(React)
console.log(ReactDom)

const HFC = function (initProps) {
  console.log(initProps)

  return {
    connected(container) {
      const div = document.createElement('div')
      div.innerHTML = 'awa-btn'
      div.classList.add('name')
      container.appendChild(div)
      const btn = document.createElement('button')
      btn.classList.add('btn', 'text-2xl', `${import.meta.env.HFC_NAME}-shadow`)
      btn.innerText = 'AWA BTN!'
      btn.onclick = function () {
        console.log('dispatching click')
        setTimeout(() => {
          initProps.events.click()
        }, 50)
      }

      const img = document.createElement('img')
      img.src = logo
      container.appendChild(btn)
      container.appendChild(img)

      const defaultSlot = {
        args: {},
        target: document.createElement('div'),
      }

      if (initProps.slots.default) {
        container.appendChild(defaultSlot.target)
        initProps.slots.default(defaultSlot)
      }
    },
    updated(props) {
      console.log(props)
    },
    disconnected() {},
  }
}

HFC.tag = 'div'
HFC.hfc = import.meta.env.HFC_NAME
HFC.ver = import.meta.env.HFC_VERSION
HFC.names = import.meta.env.HFC_PROP_NAMES

export default HFC
