import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';


const Layout = (props) => {
    const {children, footerstatus} = props;
    console.log('footerstatus', footerstatus)
    return ( 
        <>
      <div className='container'>
      <Header />
      {children}
      {!footerstatus && <Footer />}
      </div>
        </>
     )
}
 
export default Layout;