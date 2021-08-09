import React from 'react'

export default function DashBoard() {
    return (
        <div>
            <div class="container-sm row row-cols-1 row row-cols-md-3 " style= {{marginLeft: "100px"}}>
   
 


   <div class="row">
    <div class="col-sm-7"  style= {{marginLeft: "300px"}}>
     <div class="card text-white bg-primary mb-3">
       <div class="card-body">
         <h5 class="card-title">View</h5>
         {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
         <a href="/view" class="btn btn-danger">view</a>
       </div>
     </div>
   </div>
  
 
  
    
       </div>
         </div>
        </div>
    )
}
