import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
// import Appnew from './crud/Appnew';
import Login from './Login'
import Register from './Register';
import Dashboard from './Dashboard';
// import Invalid from './Invalid';
import AppBar from './AppBar';
import Home from './Home';
//lazy load
// const App = React.lazy(() => import("App"));

function NavBar() {
    

    return (
        <div>
            
            <HashRouter>
                

                <Routes>
                    <Route path='./' element={<AppBar/>}/>
                    <Route path='/register' element={<Register/>} /> 
                    <Route path='/login' element={<Login/>} /> 
                    <Route path='/dashboard' element={<Dashboard/>}/>

              
                     <Route path='/' element={<AppBar />} />
                     <Route path='/login' element={<Login/>}   />
                     {/* <Route path='/register' element={<Register/>}/>                    */}
{/* 
                     <React.Suspense fallback={<h2>Loading....</h2>}>
                            <App />
                        </React.Suspense> */}
                 
                    
                   
                </Routes>

                
            </HashRouter>



        </div>

    );
}

export default NavBar;