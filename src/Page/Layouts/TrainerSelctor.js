import React from 'react'

import {Helmet} from 'react-helmet';
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidbar/Sidebar';
import Trainer from '../Trainer/Trainer';
import './layout.css'


const TrainerSelctor = () => {
  return (
    <div className='containers'>
{/* <Navbar/> */}
<Sidebar/>
       <Helmet>
                <style>{'body { background-color: #F4F6FC }'}</style>
                <title>Trainer Selector</title>
            </Helmet>
    <Trainer/>
    </div>
  )
}

export default  TrainerSelctor