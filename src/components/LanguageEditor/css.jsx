import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

function Css() {
  const [css, setCss] = useState('')

  return (
    <Container>
      <Editor
        language='css'
        heading='CSS'
        value={css}
        onChange={setCss}
        icon='*'
        color='#0EBEFF'
      />
    </Container>
  )
}

export default Css
