import Home from './components/Home'

function App(props) {
  return (
    <div>
      <Home type={props.type} language={props.language} />
    </div>
  )
}

export default App
