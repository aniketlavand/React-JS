import React from 'react';
import "./style.css"
import ImageCard from "../Image card/image"
class Gallery extends React.Component{
constructor(props){
  super(props);

  this.state={
   curr:"",
   images:[]
  };

}


onTextChange=(e)=>{
 this.setState({
     curr : e.target.value
 });


}

onAdd=(e)=>{
  const newImg=[...this.state.images];
  newImg.push(this.state.curr);

  this.setState({
   images:newImg

  })

  this.clearInput();


}

clearInput(){
    this.setState({
        curr:""
    })
}

render=()=>{
  return(
      <div className="root-container">
          <p className="title">Photo-Gallery</p>
          <div className="input-box">
            <input type="text"  onChange={this.onTextChange} value={this.state.curr} />


          </div>
          <button onClick={this.onAdd}>Add More</button>
          <div className="list-box">

           {this.state.images.map((image)=>{
            return(<ImageCard imageUrl={image}/>)
          }) };

          </div>
          
        




      </div>
      
  );


}



}
    


  

      
  



export default Gallery;