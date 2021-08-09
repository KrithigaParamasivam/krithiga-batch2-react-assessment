import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default function Edit(){
    const[res,setResult]=useState([]);
    const[res1,setResult1]=useState([]);
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

    },[res1])
    const handleDelete=(e)=>{
      e.preventDefault();
        const id=e.target.id;
        const url=`http://localhost:4008/account/${id}`
        axios.delete(url)
        .then(res1 => {
          console.log(res1);
          setResult1(res1.data);
          console.log(res1.data);
        })
    }
    
    return(
        <div>  
          <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light"> 
                
          <tbody>
            {res.map((x) => {
                return <tr >
                   <td ><label key={x.id}>{x.id}</label></td>
                  <td ><label key={x.id}>{x.firstname}</label></td>
                  <td ><label key={x.id}>{x.lastname}</label></td>
                <td ><label key={x.id}>{x.emailid}</label></td>
                <td ><Link  id={x.id}  to={`/edit/edituser/${x.id}`} className="btn btn-primary active">edit</Link></td>
                <td ><button key={x.id} id={x.id} className="btn btn-primary active" onClick={handleDelete}>delete</button></td>
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