import React from 'react'

import {Helmet} from 'react-helmet';

import Sidebar from '../../Component/Sidbar/Sidebar';
import Proposal from '../Proposal/Proposal';


const Proposallayout = () => {
  return (
    <div className='containers' >

{/* <Sidebar/> */}
       <Helmet>
                
                <title>welcome</title>
            </Helmet>
    <Proposal/>
    </div>
  )
}

export default  Proposallayout