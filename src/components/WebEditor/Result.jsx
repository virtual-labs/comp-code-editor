import { useState, useEffect, useContext } from 'react'

import { DataContext } from './DataProvider'

import { Box, styled } from '@mui/material'


const Container = styled(Box)`
  flex: 1;
  border: 3px solid black;
`

const Result = () => {
  const [src, setSrc] = useState('')
  const { js, exp } = useContext(DataContext)

  const srcCode = `
        <html>
            <body style="height: 100vh;width: 100vw">
              <h1 style="text-align: center">Output</h1>
              <h3>Code Output:</h3>
              <div id='result' style="margin-left: 10%"></div>
              <h3>Expected Output:</h3>
              <div id='expected-result' style="margin-left: 10%">
              </div>
            </body>
            <script>
            document.getElementById('expected-result').innerHTML = ${JSON.stringify(exp?.expected)};
            </script>
            <script>
              ${js}
              let x = func(${exp?.inputs?.map(inp => JSON.stringify(inp))});
              document.getElementById('result').innerHTML = x;
            </script>
        </html>
    `

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode)
    }, 250)

    return () => clearTimeout(timeout)
  }, [js])

  return (
    <Container>
      <iframe
        srcDoc={src}
        title='output'
        sandbox='allow-scripts'
        frameBorder='0'
        width='100%'
        height='100%'
        id='result'
      />
    </Container>
  )
}

export default Result
