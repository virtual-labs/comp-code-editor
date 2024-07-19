import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
  const [exp, setExp] = useState({})
  const [js, setJs] = useState('')
  const [problems, setProblems] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        await fetch('./code-assessment.json')
        .then(async response => {
          await response.json()
            .then(data => {
              console.log(data)
              setProblems(data?.problems);
              let inputs = data?.inputs?.map((inp, idx) => `inp${idx+1}`)
              if(inputs === undefined) inputs = [];
              setJs(
              `/* Change only the function func
@params:
${inputs?.map((inp,idx) => `${inp} = ${JSON.stringify(data?.inputs[idx])}`).join('\n')}
*/
const func = (${String(inputs)}) => {
  // Write the code here
  return 'hello world'
}
              `)
            })
        })
        .catch(err => {
          console.log(err)
        })
      }

      fetchData()
      
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  }, [])
  

  return (
    <DataContext.Provider
      value={{
        js,
        setJs,
        problems,
        setProblems,
        exp,
        setExp
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
