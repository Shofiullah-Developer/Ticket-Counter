import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './Destination.css'
//import ticketData from '../Data/Data.json'

const Destination = () => {

  const details=[
    {
        id:'1',
        name:'Motorcycle',
        imgURL:"https://www.motorcyclevalley.com/photo/thumb/yamaha-mt-15.jpg",
        price:'$50'
    },
    {
        id:'2',
        name:'Bus',
        imgURL:"https://www.sustainable-bus.com/wp-content/uploads/2019/12/scania-bus4.jpg",
        price:'$20'
    },
    {
        id:'3',
        name:'Car',
        imgURL:"https://image.made-in-china.com/201f0j00TUdYutGRuApM/Electric-Motor-Car-Kids-Children-CE-Kids-Car-Battery-Operated-Car.webp",
        price:'$150'
    },
    {
        id:'4',
        name:'Train',
        imgURL:"https://images.livemint.com/img/2021/03/19/600x338/RailTel_1605087201738_1605087205405_1616133925176.jpg",
        price:'$60'
    }

]
  const {name}=useParams();
    
  const [communication,setcommunication]=useState({});

  // useEffect(()=>{
  //   const communication = details.find(a => a.name === name)
  //   setcommunication(communication)
  // },[name]);

  const HandelData=()=>{
    const communication = details.find(a => a.name === name)
    setcommunication(communication)
  }
 
    
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => {
    //     console.log('Form submitted',data);}
  
    // console.log(watch("example")); // watch input value by passing the name of it
  
    return (
     
      // <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      //   <input name="example" defaultValue="test" ref={register} />

      //   <input name="exampleRequired" ref={register({ required: true })} />
      //   {errors.exampleRequired && <span className="error">This field is required</span>}
        
      //   <input type="submit" />
      // </form> 


      <div className="Container" style={{display: 'flex'}}>
        <div style={{marginLeft:'50px', marginRight:'50px'}}>

            <p>This is destination</p>
            <input type="text"placeholder="Start Point"/>
            <br/>
            <input type="text"placeholder="End Point"/>
            <br/>
            <input onClick={HandelData} type="submit" value="Search"/>
            <br/>
            {communication&&<div>
                <h1>{communication.name}</h1>
                <h1>{communication.price}</h1>
                {/* //<img>{communication.imgURL}</img> */}
                <img src={communication.imgURL} alt=""/>
              </div>}
          </div> 
          <div> 
            <iframe style={{width: '600px',height:'400px'}} src="https://rapidapi.com/blog/wp-content/uploads/2020/03/nooverlay.png" frameborder="0"></iframe>
          </div>
      </div>
    );
};

export default Destination;