import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Details from '../Details/Details'
//import ticketData from '../Data/Data.json'


const Home = () => {

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
    return (
        <div className="container" >
             <div className="row">
           {
             details.map(detail=>
                <div className="col-md-3"> 
                    <Details key={detail.id} detail={detail}/>
                </div>)  
           }
           </div>
        </div>
    );
};

export default Home;