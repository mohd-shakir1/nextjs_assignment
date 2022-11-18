import React from 'react';


const Image = () => {
    const {src, alt, width, height} = props
    return ( 
        <>
        <img src={src} width={width} alt={alt} height={height} />
        </>
     )
}
 
export default Image;