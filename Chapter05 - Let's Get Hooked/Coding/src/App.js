import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';   

const AppLayout = () =>{
    return (
        <div className='app-layout'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root .render(<AppLayout/>); // render function component