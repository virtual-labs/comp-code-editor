import Code from './Code'
import Result from './Result'
import Header from './Header'
import DataProvider from './DataProvider'
import { useEffect, useState } from 'react'

const Home = () => {
  return (
    <>
      <DataProvider>

        <div className='parent'>
        <Code />
        <Result />
        </div>
      </DataProvider>
    </>
  )
}

export default Home
