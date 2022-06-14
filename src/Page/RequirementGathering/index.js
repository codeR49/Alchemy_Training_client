import React, {useState} from 'react'
import { Helmet } from 'react-helmet';
import VirtualizedSelect from 'react-virtualized-select'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import "./index.css"

function Requirementgathering() {
    const [itemtype, setItemtype] = useState(null)
    const type = [
        { label: "React Js", value: 1 },
        { label: "Node Js", value: 2 },
        { label: "Java", value: 3 },
        { label: "AWS", value: 4 },
        { label: "Azure", value: 5 },
        { label: "Red Hat", value: 6 }
      ]
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #F4F6FC }'}</style>
            </Helmet>
<p className='p-text' >Requirement Gathering</p>
            <div style={{display:"flex"}}>
    <form className="row g-3 abc">
        <div>
            <h5 className="heading">Customer Details </h5>
        </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">Client Name</label>
    
      <input type="text" className="form-control" placeholder='Acme' />
      
     
    </div>
   
    <div className="col-md-3">
      <label for="Number" className="form-label">Full Name</label>
      <input type="text" className="form-control" placeholder='Abraham Zack' />
    </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">Email</label>
      <input type="email" className="form-control" placeholder='example@gmail.com' />
    </div>
    <div className="col-md-3">
      <label for="Number" className="form-label">Phone No</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">+91</div>
        </div>
      <input type="text" className="form-control" placeholder='2073247788' />
    </div>
    </div>
    <div className="col-md-3">
      <label for="FromDate" className="form-label">Training Start Date</label>
      <input type="Date" className="form-control" />
    </div>
    <div className="col-md-3">
      <label for="pax" className="form-label">No Of Pax</label>
      <input type="text" className="form-control" placeholder='00'/>
    
    </div>
    <div className="col-md-6">

    </div>

    <div className="col-md-6">
    <div >
            <h5 className="heading">Technology </h5>
        </div>
      {/* <label for="pax" className="form-label">Technology</label> */}
      
    <div className="col-md-6">
      <label for="Type" className="form-label">Choose a Technology</label>
     
      <VirtualizedSelect
        options={type}
        onChange={(value) => setItemtype(value)}
        value={itemtype}
        placeholder="Choose one"
        style={{boxShadow:"5px 5px 5px #00000029"}}
      />
    </div>
    
    </div>

    <div className="col-md-6">
      <label for="pax" className="form-label">Adds On</label>
      
      <div style={{display:"flex"}}>
    
    <div >
        <input type="checkbox"/>
        <label style={{marginLeft:"20px"}}>Platform(LMS)</label>
    </div>
    <div style={{marginLeft:"100px"}}>
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Lab Sandbox</label>
    </div>
    <div style={{marginLeft:"100px"}}>
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Mentor</label>
    </div>
    </div>
    <div style={{display:"flex"}}>
        
    <div >
        <input type="checkbox"/>
        <label style={{marginLeft:"20px"}}>Lab Support</label>
    </div>
    <div style={{marginLeft:"115px"}}>
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Offline Support</label>
    </div>
    
    </div>
    
    </div> 
<div className="col-md-6">
      <label for="pax" className="form-label">Description</label>
      <textarea type="text" className="form-control"/>
    
    </div>

    <div className="col-md-6">
      <label for="pax" className="form-label">Description</label>
      <textarea type="text" className="form-control"/>
    
    </div>    

    <div className="col-md-6">
      <label for="pax" className="form-label">Assessments</label>
      <div style={{display:"flex"}}>
    
    <div >
        <input type="checkbox"/>
        <label style={{marginLeft:"20px"}}>MCQ</label>
    </div>
    <div style={{marginLeft:"85px"}}>
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Coding</label>
    </div>
    <div style={{marginLeft:"100px"}}>
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Project</label>
    </div>
    </div>
    <div style={{display:"flex"}}>
    
    <div >
        <input type="checkbox"/>
        <label style={{marginLeft:"20px"}}>Case Study</label>
    </div>
    <div style={{marginLeft:"45px"}}>
        <input type="checkbox"/>
        <label  style={{marginLeft:"20px"}}>Proctoring</label>
    </div>
   
    </div>
    
    </div>

    <div className="col-md-6">
      <label for="pax" className="form-label">Reports</label>
      <div style={{display:"flex"}}>
    
    <div  className="col-md-6">
        <input type="checkbox"/>
        <label  style={{marginLeft:"10px"}}>Daily Attendence Report</label>
    </div>
    <div  className="col-md-6">
        <input type="checkbox"/>
        <label  style={{marginLeft:"10px"}}>Weekly Attendence Report</label>
    </div>

    </div>
    <div style={{display:"flex"}}>
    
    <div  className="col-md-6" >
        <input type="checkbox"/>
        <label style={{marginLeft:"10px"}}>Weekly Performance Report</label>
    </div>
    <div  className="col-md-6">
        <input type="checkbox"/>
        <label  style={{marginLeft:"10px"}}>Monthly Attendence Report</label>
    </div>
    </div>
    <div style={{display:"flex"}}>
    <div  className="col-md-6" >
        <input type="checkbox"/>
        <label style={{marginLeft:"10px"}} >Monthly Performance Report</label>
    </div>
    <div  className="col-md-6">
        <input type="checkbox"/>
        <label  style={{marginLeft:"10px"}}>Consolidated Monthly Report</label>
    </div>
    </div>
    
    </div>   

 <div >
 <button class="buttons">Submit</button>
    

 <button class="buttons">Reset</button>
    
 </div>
  </form>

  

</div>





        </div>
    )
}

export default Requirementgathering