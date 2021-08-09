import React,{useState,useEffect} from 'react';
export default function View(){
    const[res,setResult]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4008/account").then(res => res.json()).then(data=>{
          console.log(data);
          setResult(data);
        }).catch(e=>{
          console.error("ERR in Student...");
          console.error(e);
        }).finally(()=>{
          console.log("I am in finally");
        })

    },[])
    
    return(
        <div>
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                <thead>
                    <tr className="table-dark">
                    <th scope="col">id</th> 
                    <th scope="col">First Name</th> 
                    <th scope="col">Last Name</th> 
                    <th scope="col">Email Id</th>
                    <th scope="col">PhoneNumber</th>
                    {/* <th scope="col">password</th>
                    <th scope="col">confirmpassword</th> */}
                    </tr>
                </thead>
                <tbody>
              {res.map((x) => {
                return <tr >
                 <td ><label key={x.id}>{x.id}</label></td>
                <td ><label key={x.id}>{x.firstname}</label></td>
                <td ><label key={x.id}>{x.lastname}</label></td>
                <td ><label key={x.id}>{x.emailid}</label></td>
                <td ><label key={x.id}>{x.phonenumber}</label></td>
                {/* <td ><label key={x.id}>{x.password}</label></td>
                <td ><label key={x.id}>{x.confirmpassword}</label></td> */}
               
                </tr>
              })}
              
              </tbody>
            </table>
            
            </div>
            </div>
            </div>
            </div>
            
        </div>
    )
}