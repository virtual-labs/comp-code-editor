import { useContext } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

import { DataContext } from './DataProvider'

const Container = styled(Box)`
  background-color: #060606;
  display: flex;
  flex: 2;
  overflow: auto;
`

const Code = () => {
  const { js, setJs } = useContext(DataContext)

  return (
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
  )
}

export default Code
