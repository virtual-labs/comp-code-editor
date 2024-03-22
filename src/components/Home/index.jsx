import WebEditor from '../WebEditor'
import LanguageEditor from '../LanguageEditor'

const Home = (props) => {
  if (props.type == 'webeditor') {
    return (
      <>
        <WebEditor />
      </>
    )
  } else if (props.type == 'language') {
    return (
      <>
        <LanguageEditor language={props.language} />
      </>
    )
  }

  return (
    <>
      <h1 style={{ color: 'red', background: 'yellow' }}> Server Error! </h1>
    </>
  )
}

export default Home
