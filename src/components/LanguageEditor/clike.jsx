import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

function Clike() {
  const [c, setC] = useState('')

  return (
    <Container>
      <Editor
        language='text/x-c++src'
        heading='C/C++'
        value={c}
        onChange={setC}
        icon='C'
        color='#FCD000'
      />
    </Container>
  )
}

export default Clike
