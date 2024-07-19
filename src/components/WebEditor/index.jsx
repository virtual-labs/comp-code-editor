import DataProvider from './DataProvider'
import BasicTabs from './tabs'

// const Home = () => {
//   return (
//     <>
//       <DataProvider>

//         <div className='parent'>
//         <Code />
//         <Result />
//         </div>
//       </DataProvider>
//     </>
//   )
// }
const Home = () => {
  return (
    <>
      <DataProvider>
        <BasicTabs />
      </DataProvider>
    </>
  )
}

export default Home
