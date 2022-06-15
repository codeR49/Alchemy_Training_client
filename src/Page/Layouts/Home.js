import React from 'react'
// import Inventory from '../Inventory'
import {Helmet} from 'react-helmet';
import Navbar from '../../Component/Navbar/Navbar';
import Requirementgathering from '../RequirementGathering';

const Home = () => {
  return (
    <div >
<Navbar/>
       <Helmet>
                <style>{'body { background-color: black; }'}</style>
                <title>welcome</title>
            </Helmet>
    <Requirementgathering/>
    </div>
  )
}

export default  Home