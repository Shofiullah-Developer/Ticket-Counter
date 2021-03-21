import React from 'react';
import { Link } from 'react-router-dom';
//import ticketData from '../Data/Data.json'

const Details = (props) => {
    const {id,imgURL,name}=props.detail;
//console.log(props.detail)
   
    
    return (
        <div className="container ">
          
            <Link to={`/destination/${name}`}>
                
            <div className="card" style={{width: "18rem"}}>
            <img style={{height:'200px',objectFit:'cover'}} src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{name}</p>
            </div>
            </div>                       
            </Link>
            
        </div>
    );
};

export default Details;