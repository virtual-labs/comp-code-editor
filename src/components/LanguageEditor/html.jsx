import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

function Html() {
  const [html, setHtml] = useState('')

  return (
    <Container>
      <Editor
        language='xml'
        heading='HTML'
        value={html}
        onChange={setHtml}
        icon='/'
        color='#FF3C41'
      />
    </Container>
  )
}

export default Html
