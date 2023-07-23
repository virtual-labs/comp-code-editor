import React from 'react'
import Javascript from './javascript'
import Html from './html'
import Css from './css'

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
  }
}

export default index
