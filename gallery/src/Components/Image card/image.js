import React from 'react';

import "./style.css"


const ImageCard = (props )=>{
   
    return(
        <img alt="Gallery pic" className="image-card" src={props.imageUrl}/>
    )


}

export default ImageCard;