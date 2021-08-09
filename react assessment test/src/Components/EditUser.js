import React,{useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser(){
  const hist = useHistory();
    const [cities,setCities] = useState([]);
    
        let history = useHistory();
        const { id } = useParams();
        const [user, setUser] = useState({
          firstname: "",
          lastname: "",
          emailid: "",
          phonenumber: "",
          password: "",
          confirmpassword:""
         
        });
      
        const { firstname, lastname, emailid,phonenumber, password,confirmpassword} = user;
        const onInputChange = e => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
      
        
      
        const onSubmit = async e => {
          e.preventDefault();
          await axios.put(`http://localhost:4008/account/${id}`, user);
          history.push("/");
         // alert("Updated....");
         
        };
      
        const loadUser = async () => {
          const result = await axios.get(`http://localhost:4008/account/${id}`);
          setUser(result.data);
        };
    
    return(
        <div className="container">
        <title>Student Registeration</title>
       <form onSubmit={e => onSubmit(e)}> 
       <div className="container-md ">
            <div className="col-sm-13">
            <div className="card"> 
            <div className="card-header"><h4>RECORDS</h4></div>
            <div className="card-body"> 
            <table className="table table-bordered table-light">
      
      <tr><td><label>First Name</label></td>
     <td><input type="text" name="firstname" value={firstname} onChange={e => onInputChange(e)}/></td> 
      </tr>
      <tr >
      <td><label>Last Name</label></td>
     <td> <input type="text" name="lastname" value={lastname} onChange={e => onInputChange(e)}/></td>
     </tr>
      <tr >
      <td><label>Email Id</label></td>
      <td>
      <input type="text" name="emailid" value={emailid} onChange={e => onInputChange(e)}/>
      </td>
      </tr>
      <tr >
      <td><label>Phone Number</label></td>
      <td>
      <input type="text" name="phonenumber" value={phonenumber} onChange={e => onInputChange(e)}/>
      </td>
      <td><label>password</label></td>
      <td>
      <input type="text" name="password" value={password} onChange={e => onInputChange(e)}/>
      </td>

      <td><label>confirm password</label></td>
      <td>
      <input type="text" name="confirm password" value={confirmpassword} onChange={e => onInputChange(e)}/>
      </td>
      </tr>
        <tr>
          
            <button className="btn btn-primary" >UPDATE</button>
            <button className="btn btn-primary" onClick={() => hist.push("/View")}>BACK</button>
          {/* //  <button className="submit" onClick={() => history.push("/")}> Login </button> */}
           </tr> 
           </table>
          </div></div></div></div>
            </form>
            </div>
    )
}