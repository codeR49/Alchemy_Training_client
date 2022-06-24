import React from 'react'

import {Helmet} from 'react-helmet';
import Navbar from '../../Component/Navbar/Navbar';

import Sidebar from '../../Component/Sidbar/Sidebar';
import Proposal from '../Proposal/Proposal';


const Proposallayout = () => {
  return (
    <>
    <Navbar/>
    <div className='containers' >

{/* <Sidebar/> */}
       <Helmet>
                
                <title>Proposal Message</title>
            </Helmet>
    <Proposal/>
    </div>
    </>
  )
}

export default  Proposallayout