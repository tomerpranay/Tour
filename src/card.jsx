import { useState } from "react";

const Card=(props)=>{
    const[readmore,setReadmore] = useState(false);
    const ii=readmore? props.tour.info:`${props.tour.info.substring(0,200)}...`;
   function readmoreHandler(){
    setReadmore(!readmore);
   }
   
    return(
        <div className="card">
            <img src={props.tour.image} alt="loading" className="cityImage"></img>
            <div className="tourDetails">
                <h4 className="tourPrice">{props.tour.price}</h4>
                <h4 className="tourCityName">{props.tour.name}</h4>

            </div>
            <div className="description">
               {ii}
                <span className="readMore" onClick={readmoreHandler}>
                      {readmore? 'showless' : 'readmore'}
                </span>
                
            </div>
            <button className="notIntrestedBtn" onClick={()=>props.removeTour(props.tour.id)}>Not Intrested</button>
        </div>
    )
}
export default Card;