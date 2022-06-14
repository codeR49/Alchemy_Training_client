import React from 'react'
import "../Trainer/Trainer.css"
import { Helmet } from 'react-helmet';

function Trainer() {
  return (
    <div>
         <Helmet>
                <style>{'body { background-color: #F4F6FC }'}</style>
            </Helmet>
<p  className='p-text'>Trainer Selector</p>
            <div style={{display:"flex"}}>
    <div className="row g-3 abc">
        <div style={{display:"flex"}}>
            <h1 className="trainer-heading">Recommended Trainers Based On the Selections</h1>
            <button class="buttonedit">Edit</button>
        </div>
        <div className="col-md-4">
        <p><span>Client <span>:</span> Acme </span></p>
        <p><span>Full Name <span>:</span> Abraham Zack</span></p>
        <p><span>Email ID <span>:</span> email@email.com</span></p>
        <p><span>Phone number <span>:</span> +91 20 7234 3456</span></p>
        <p><span>Training start date <span>:</span> 25/11/2022</span></p>
    </div>
    <div className="col-md-8">
        <p><span>Technology <span>:</span> Java</span></p>
        <p><span>Add Ons <span>:</span> Platform, Lab Support, mentor</span></p>
        <p><span>Assessment <span>:</span> Coding, MCQ</span></p>
        <p><span>Reports <span>:</span> Daily attendance, Weekly attendance, Consolidated Monthly Report</span></p>
        <p><span>Number of Pax <span>:</span> 25</span></p>
    </div>
    <hr/>
    <div className="col-md-4">
    <div>
          
            <label for="Number" className="form-label" style={{marginBottom:"30px", color:"#2E384D"}}>Trainer's Name</label>
        </div>
    
      
     

    <div >
        <input type="checkbox"/>
        <label style={{marginLeft:"20px"}}>Edwin Hoyles</label>
    </div>
    <div >
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Britney Jimenez</label>
    </div>
    <div >
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Leo Reese</label>
    </div>
    <div >
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Baldwin Larson</label>
    </div>
    <div >
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Philbert Dittman</label>
    </div>
  
    </div>
    <div className="col-md-8">
      <label for="Number" className="form-label" style={{color:"#2E384D"}}>Email</label>
    
      <input type="email" className="form-control iptemailto" placeholder='To' />
      <input type="text" className="form-control iptemailto" placeholder='Subject' />
      <textarea className="form-control iptemailtext"  placeholder='' />
      <input type="file" id="myfile" name="myfile" className=" iptfile iptemailto" placeholder='To' />
    </div>




<div className="col-md-4">
{/* just for seperation */}
</div>
 <div className="col-md-8">
 <button className='buttonemilsubmit' >Submit</button>
    

 <button className='buttonemilsubmit' >Skip</button>
    
 </div>
  </div>

  

</div>

    </div>
  )
}

export default Trainer