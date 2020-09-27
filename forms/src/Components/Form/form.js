import React from 'react';

import "./style.css";

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender:"",
    };


  }
  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender: "Male"
    });
  };

    // onNameChange=(event)=>{
    //   this.setState({
    //     name:event.target.value
    //   });


    // }

    // onEmailChange=(event)=>{
    //   this.setState({
    //     email:event.target.value
    //   });

    // }
    
    // onPhoneChange=(event)=>{
    //   this.setState({
    //     phoneNumber:event.target.value
    //   });

        
    // };

    // onGenderChange=(event)=>{
    //   this.setState({
    //     gender:event.target.value
    //   });

    // }

    // onPassswordChange=(event)=>{
    // this.setState({
    //   password:event.target.value
    // });

    // }

    onFieldChange=(event)=>{
      this.setState({
        [event.target.name]: event.target.value 
      }) ;   
      
    };

    onSubmit=(event)=>{
      if(this.state.phoneNumber==='' || this.state.phoneNumber.length !==10 ){
        window.alert("Invalid Phone no");
        return;
      }
      const data = `
    Name: ${this.state.name},
    Email: ${this.state.email},
    Phone: ${this.state.phoneNumber},
    Gender: ${this.state.gender},
    Password: ${this.state.password}
    `;
    window.alert(data);
    this.clearForm();

    };
   


    render=()=>{
  return(
       <div className="form-container">
           <p className="title">------User Form------</p>
           <input name ="name" onChange={this.onFieldChange} value={this.state.name} className="input-style" type="text" placeholder="Enter Your Name"/> 
           <input name="email" onChange={this.onFieldChange} value={this.state.email} className="input-style" type="email" placeholder="Enter Your Email-ID"/>
           <input name="phoneNumber" onChange={this.onFieldChange} value={this.state.phoneNumber} className="input-style" type="text" placeholder="Enter Your Phone no."/>
           <select name="gender" onChange={this.onFieldChange} value={this.state.gender} className="input-style">
            <option value="">Select Gender</option>
            <option value="male">Male</option>    
            <option value="female">Female</option>    
           </select>  
           <input name="password" onChange={this.onFieldChange} value={this.state.password} className="input-style" type="password" placeholder="Enter Password"/>
           <button onClick={this.onSubmit} className="submit-btn">Submit</button>
       </div>
  );


    }
} 



export default Form;