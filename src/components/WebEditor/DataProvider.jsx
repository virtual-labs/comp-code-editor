import { createContext, useState } from 'react'

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('')
  const [js, setJs] = useState('')
<<<<<<< Updated upstream
  const [css, setCss] = useState('')
=======
  const [problems, setProblems] = useState([])
  const [experimentName, setExperimentName] = useState('')

  useEffect(() => {
    try {
      const fetchData = async () => {
        await fetch('./code-assessment.json')
        .then(async response => {
          await response.json()
            .then(data => {
              console.log(data)
              setExperimentName(data['experiment name'])
              setProblems(data?.problems);
              let inputs = data?.inputs?.map((inp, idx) => `inp${idx+1}`)
              if(inputs == undefined) inputs = [];
              setJs(
              `/* Change only the function func
@params:
${'\n' + inputs?.map((inp, idx) => `${inp} = ${JSON.stringify(data?.inputs[idx])}`).join('\n')}
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
  
>>>>>>> Stashed changes

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
