import { React, useState } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`

const Javascript = () => {
  const [js, setJs] = useState('')
  return (
    <>
      <Container>
        <Editor
          language='javascript'
          heading='JS'
          value={js}
          onChange={setJs}
          icon='( )'
          color='#FCD000'
        />
      </Container>
      <div></div>
    </>
  )
}

export default Javascript
