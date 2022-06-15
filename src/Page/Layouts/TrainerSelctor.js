import React from 'react'

import {Helmet} from 'react-helmet';
import Navbar from '../../Component/Navbar/Navbar';
import Trainer from '../Trainer/Trainer';


const TrainerSelctor = () => {
  return (
    <div >
<Navbar/>
       <Helmet>
                <style>{'body { background-color: #F4F6FC }'}</style>
                <title>Trainer Selector</title>
            </Helmet>
    <Trainer/>
    </div>
  )
}

export default  TrainerSelctor