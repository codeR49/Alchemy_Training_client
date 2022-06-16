import React from 'react'
import {Helmet} from 'react-helmet';
import Sidebar from '../../Component/Sidbar/Sidebar';
import Enquiry from '../Enquiry/Enquiry';
import "../Layouts/layout.css"

function Enquirylayout() {
  return (
    <div className='containers'>
         
<Sidebar/>
       <Helmet>
                
                <title>Enquiry</title>
            </Helmet>
    <Enquiry/>
    </div>
   
  )
}

export default Enquirylayout