import React, { useState } from 'react';
import './Account.css'
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function AddProduct() {
  const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        email : Yup.string().email("INvalid Email").required("Pls Enter a Email"),
        phonenumber : Yup.string().matches(phoneRegExp,"Phone number is invalid").min(10," phone number should minimum 10 numbers"),
        password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
       confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required')
        
    
}) 
const hist = useHistory();
const { handleSubmit,handleChange,values,errors} = useFormik({
  initialValues: {
    firstname:'',
    lastname:'',
    emailid:'',
    phonenumber:'',
    password: '',
    confirmpassword:''
  },
  validationSchema,
  onSubmit(values) {

   
    // axios.get("http://localhost:4008/account",values).then(res=>res.data).then((data)=>{
    //       //alert("User Onboarded successfully");
    //       console.log("=============Submitted");
    //       console.log(data);        
    // }
    // ).catch((err)=>{
    //         console.log("err")
    //     })

   
   try{
          console.log(JSON.stringify(values))

    axios.post("http://localhost:4008/account",values).then(res=>res.data).then((data)=>{
          //alert("User Onboarded successfully");
          console.log("=============Submitted");
          console.log(data);
          swal({
            // title: "Good job!",
              text: "Account created successfully!",
              icon: "success",
            });
    }
    ).catch((err)=>{
            console.log("err")
        })
     catch(Exception){
         Swal.fire(Exception,"","error");
       }
}


}) 
 
    return (
        <div>           
            <div className="container-md ">
            <div className="col-sm-13">
            <div className="card1"> 
            <div className="card-header"><h4>REGISTER FORM</h4></div>
            <form onSubmit={handleSubmit} noValidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">First Name</label>
      <input type="text" class="form-control" id="validationDefault01" name="firstname" value={values.firstname} onChange={handleChange} />
      {errors.firstname ? errors.firstname : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Last Name</label>
      <input type="text" class="form-control" id="validationDefault02" name="lastname" value={values.lastname} onChange={handleChange} />
      {errors.lastname ? errors.lastname : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Email id</label>
      <div class="input-group">
        <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="emailid" value={values.emailid} onChange={handleChange} />
        {errors.emailid ? errors.emailid : null}
      </div>
    </div>
  </div>

  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault03">Phone Number</label>
      <input type="text" class="form-control" id="validationDefault03" name="phonenumber" value={values.phonenumber} onChange={handleChange} />
      {errors.phonenumber ? errors.phonenumber : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault04">Password</label>
      <input type="text" class="form-control" id="validationDefault04" name="password" value={values.password} onChange={handleChange}  />
      {errors.password ? errors.password : null}
    </div>

    <div class="col-md-4 mb-3">
      <label for="validationDefault05">Confirm Password</label>
      <input type="text" class="form-control" id="validationDefault05" name="confirmpassword" value={values.confirmpassword} onChange={handleChange} />
      {errors.confirmpassword ? errors.arrivalDate : null}
    </div>

  </div>
  
  <button class="btn btn-primary" type="submit" >SIGN UP</button>
  <button className="btn btn-primary" onClick={() => hist.push("/userdashboard")}>BACK</button>
  
</form>
        </div></div></div></div>
        
)}
