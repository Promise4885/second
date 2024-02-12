// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className='general'>
            <div className='slider'>
            <div className='Logo'>Logo</div>
                <div className='menu'>
                    <ul>
                        <li>Home</li>
                        <li>Sign-up</li>
                        <li>Data Plan</li>
                        <li>Airtime</li>
                        <li>Pay Bills</li>
                    </ul>
                </div>
                <div className='logout'>
                    <a href='#'>Logout</a>
                </div>
            </div>
            <div className='main'>
                <div className='first'></div>
                <div className='second'>
                <label htmlFor=''>Login</label> 
                <div>
                    <label htmlFor=''>username</label>
                    <input type='text'name='username' id='username'></input>
                </div>
                <div>
                    <label htmlFor=''>password</label>
                    <input type='password'name='username' id='password'></input>
                </div>
                <button>Login</button>
                </div>
            </div>
        </div>

    )
}

export default Home;
