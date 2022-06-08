import React, { useEffect } from "react";
import { useState } from "react";

const Form=()=>{
    const [form ,setForm]=useState({
        userame:"",
        email:"",
        password:"",
        age:0,
        IsIndian:false,
    });

    
   const handleonChange= (e)=>{
       let {type, name ,value, checked}=e.target;
console.log(type,name,value,checked)
       setForm({
           ...form,
           [name]:value,
       });
   };

   const handleOnSubmit=(e)=>{
       e.preventDefault();
       console.log(form);
       if(!form.userame) ref.current.focus()
       Ref.current.focus
   }

   useEffect(()=>{
       console.log(form)
   },[form]);

   return (
       <div>
           Form
           <form >
         <div>
             <label >Name:</label>
             <input type="text" name="usernsme" placeholder="Entername" value={form.username} onChange={handleonChange}/>
         </div>
         <div>
         <label >Age:</label>
             <input type="number" name="age" placeholder="Entername" value={form.age} onChange={handleonChange}/>

         </div>
         <div>
         <label >Email:</label>
             <input type="email" name="email" placeholder="Entername" value={form.email} onChange={handleonChange}/>

         </div>
         <div>
         <label >Password:</label>
             <input type="Password" name="password" placeholder="Enter Password" value={form.Password} onChange={handleonChange}/>

         </div>
         <div>
         
             <input type="checkbox" name="IsIndian" placeholder="Enter Password" value={form.IsIndian} onChange={handleonChange}/>
             <label >Is Indian:</label>
         </div>
           </form>

       </div>
   )



}

export default Form