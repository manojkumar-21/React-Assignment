import React, {useState , useEffect} from 'react';
import './Home.css'



const Home = () => {

    return (
        <div className='data'>
            <div>
                <h1>EMPLOYEES DATABASE</h1>
                <img src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' alt=''></img>
            </div>
            
            <div>
                <h1>PRODUCTS DATABASE</h1>
                <img src='https://st.depositphotos.com/2488661/2858/v/950/depositphotos_28586853-stock-illustration-shopping-cart-icon.jpg' alt=''></img>
            </div>
        </div>
        );
}

export default Home;
