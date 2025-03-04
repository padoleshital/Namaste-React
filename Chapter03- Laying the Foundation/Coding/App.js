import React from 'react';
import ReactDOM from 'react-dom/client';
import Icon from './icon.png';
import Profile from './profile.jpg';

 const Header = () =>{
    return (
        <>
        <div className='header'>    
            <div className='left'>
                <img src={Icon} alt="logo" />
            </div>
            <div className='center'>
                <input type='text' placeholder='what is in your mind' />
                <button type="submit">
            <i class="fa fa-search"></i>
          </button>
            </div>
            <div className='right'>
                <img  src={Profile}></img>
            </div>

        </div>
        
        </>
    )
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Header />);