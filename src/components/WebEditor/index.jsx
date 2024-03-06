import Code from './Code'
import Result from './Result'
import Header from './Header'
import DataProvider from './DataProvider'
import { useEffect, useState } from 'react'
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
