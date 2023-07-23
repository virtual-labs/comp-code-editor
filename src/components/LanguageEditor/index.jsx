import React from 'react'
import Javascript from './javascript'
import Html from './html'
import Css from './css'
import Python from './python'
import Clike from './clike'

function index(props) {
  if (props.language == 'javascript') {
    return (
      <>
        <Javascript />
      </>
    )
  } else if (props.language == 'html') {
    return (
      <>
        <Html />
      </>
    )
  } else if (props.language == 'css') {
    return (
      <>
        <Css />
      </>
    )
  } else if (props.language == 'python') {
    return (
      <>
        <Python />
      </>
    )
  } else if (props.language == 'c' || props.language == 'cpp') {
    return (
      <>
        <Clike />
      </>
    )
  }
}

export default index
