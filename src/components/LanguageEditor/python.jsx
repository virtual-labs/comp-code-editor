import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

function Python() {
  const [python, setPython] = useState('')

  return (
    <Container>
      <Editor
        language='python'
        heading='python'
        value={python}
        onChange={setPython}
        icon='Py'
        color='#FCD000'
      />
    </Container>
  )
}

export default Python
