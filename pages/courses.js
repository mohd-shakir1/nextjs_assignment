import Image from 'next/image';
import React from 'react';
import Styles from '../styles/Courses.module.css'


export const getStaticProps = async () =>{
    //api call
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();//  to convert stringified json to data
    return {
        props: {productData:data}
    }
}

const Courses = (props) => {
    console.log(props,"propssssss");
    const {productData} = props;
    return ( 
        <>
        <h2>API data</h2>
        <div className='container'>
        <div className='row'>
        {productData.map(item => (
           
                <div className='col-md-3'>
                <div className='mb-4 p-3 '>
                <Image src={item.image} alt=".." width={300} height={300} className={Styles.img_responsive} />
                <h4 className='fs-6'>{item.title}</h4>               
                <p className={Styles.elipsis + ' text-muted'}>{item.description}</p>
                <h6 className='text-danger'>Rs. {item.price}</h6>
                </div>
                </div>
            
            
        ))}
        </div>
        </div>
        </>
     )
}
 
export default Courses;