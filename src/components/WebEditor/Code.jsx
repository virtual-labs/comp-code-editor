import { useContext } from 'react'
import Editor from '../Editor'

import { Box, styled } from '@mui/material'

import { DataContext } from './DataProvider'

const Container = styled(Box)`
  background-color: #060606;
  display: flex;
  flex: 1
`

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext)

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
