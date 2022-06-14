import React from 'react'
// import Inventory from '../Inventory'
import {Helmet} from 'react-helmet';
import Requirementgathering from '../RequirementGathering';

const Home = () => {
  return (
    <div >
       {/* <Inventory/> */}
       <Helmet>
                <style>{'body { background-color: black; }'}</style>
                <title>welcome</title>
            </Helmet>
    <Requirementgathering/>
    </div>
  )
}

export default  Home