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
  <!DOCTYPE html>
  <html>
    <head>
      <title>Code Output Checker</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <style>
        body, html {
          height: 100vh;
          width: 100vw;
        }
        h1 {
          text-align: center;
        }
        #result,
        #expected-result {
          margin-left: 10%;
          padding: 5px;
          border-radius: 5px;
          width: 80%;
          display: block;
        }
        #submit-button {
          margin-top: 20px;
          width: 30%;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          background-color: #358de6;
          color: white;
          transition: background-color 0.3s ease;
        }
        .button-container {
          display: flex;
          justify-content: center;
        }
        #tries {
          margin-left: 10%;
          font-style: italic;
        }
        #result-announce-incorrect, #result-announce-correct {
          border: none;
          border-radius: 5px;
          color: #fff;
          width: 100%;
          display: none;
          font-family: "Geneva";
          justify-content: center;
          align-items: center;
          column-gap: 3px;
          font-weight: bold;
          font-size: 1.5rem;
        }
        #result-announce-correct {
          color: green;
        }
        #result-announce-incorrect {
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>Output</h1>
      <div id="result-announce-incorrect">
        <i class="fa fa-close" id="result-announce-close"></i>
        <span id="result-announce-result-incorrect"></span>
      </div>
      <div id="result-announce-correct">
        <i class="fa fa-check" id="result-announce-close"></i>
        <span id="result-announce-result-correct"></span>
      </div>
      <h3>Code Output:</h3>
      <textarea disabled id="result" style="resize: vertical; min-height: 1.5em"></textarea>
      <h3 id="expected-result-header">Expected Output: <i class="fa fa-caret-square-o-down" id="accordion" style="font-size:25px; color: blue"></i>
      </h3>
      <textarea disabled id="expected-result" style="resize: vertical; min-height: 1.5em"></textarea>
      <div class="button-container">
      <button id="submit-button" onclick="checkOutput()">Submit</button>
      </div> 
      <script>
        document.getElementById('expected-result').value = JSON.stringify(${JSON.stringify(exp?.expected)});
        let acc = document.getElementById("accordion");
        let expected_output = document.getElementById("expected-result");

        expected_output.style.display = "none";
        document.getElementById("expected-result-header").style.display = "none";

        acc.addEventListener("click", function() {
          if(this.classList.contains("fa-caret-square-o-down")) {
            expected_output.style.display = "block";
            this.classList.remove("fa-caret-square-o-down");
            this.classList.add("fa-caret-square-o-up");
          } else {
            expected_output.style.display = "none";
            this.classList.remove("fa-caret-square-o-up");
            this.classList.add("fa-caret-square-o-down");
          }
        });

        document.getElementById("result-announce-close").addEventListener("click", function() {
          document.getElementById("result-announce").style.display = "none";
        });

        function checkOutput() {
          let expectedOutput = JSON.stringify(${JSON.stringify(exp?.expected)});
          let actualOutput = JSON.stringify(x);
          let submitButton = document.getElementById('submit-button');
          document.getElementById("expected-result-header").style.display = "block";
          if (expectedOutput === actualOutput) {
            let result_announce_span = document.getElementById('result-announce-result-correct');
            document.getElementById('result-announce-correct').style.display = 'flex';
            document.getElementById('result-announce-incorrect').style.display = 'none';
            result_announce_span.innerHTML = 'Correct';
          } else {
            let result_announce_span = document.getElementById('result-announce-result-incorrect');
            document.getElementById('result-announce-incorrect').style.display = 'flex';
            document.getElementById('result-announce-correct').style.display = 'none';
            result_announce_span.innerHTML = 'Incorrect';
            document.getElementById('submit-button').innerHTML = 'Resubmit';
          }
        }
        ${js}
        let x = func(${exp?.inputs?.map(inp => JSON.stringify(inp))});
        document.getElementById('result').value = x;
      </script>
    </body>
  </html>
  `

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode)
    }, 250)

    return () => clearTimeout(timeout)
  }, [srcCode, js])

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
        style={{ height: '100%' }}
      />
    </Container>
  )
}

export default Result