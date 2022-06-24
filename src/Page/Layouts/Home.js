import React from 'react'
// import Inventory from '../Inventory'
import {Helmet} from 'react-helmet';
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidbar/Sidebar';
import Requirementgathering from '../RequirementGathering';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='containers' >

{/* <Sidebar/> */}
       <Helmet>
                
                <title>New Requirement</title>
            </Helmet>
    <Requirementgathering/>
    </div>
    </>
  )

}

export default  Home