import React from 'react'
import "./Tours.css"
import Card from "./card.jsx"
const Tours = (props) => {
   function getid(id){
    props.removeTour(id);
   }
    return (
        <div className='container'>
        <div><h2 className='title'>Plan With Love</h2></div>
        <div className='cardsContainer'>
            {
                props.tours.map( (tour)=>{
                    return <Card tour={tour} removeTour={getid}></Card>
                    
                })
            }</div>
        </div>
    )
}
export default Tours;