import Code from './Code'
import Result from './Result'
import Header from './Header'
import DataProvider from './DataProvider'

const Home = () => {
  return (
    <>
      <DataProvider>
        <Header />
        <Code />
        <Result />
      </DataProvider>
    </>
  )
}

export default Home
