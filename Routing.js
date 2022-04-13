import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
// import Appnew from './crud/Appnew';
import Register from './auth/Register';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Home from './Home';
import AppBar from './auth/AppBar';
//lazy load
const CrudApp = React.lazy(() => import("./crud/App"));
const RxjsApp = React.lazy(()=>import("./Rxjs/App"))
const ReduxApp = React.lazy(()=>import("./Redux/App"))

function Routing() {


    return (
        <div>

            <HashRouter>


                <Routes>

                    <Route path='/' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                        <Home />
                    </React.Suspense>} />
                    <Route path='home' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                        <Home />
                    </React.Suspense>} />
                    <Route path='/crud/App' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                        <CrudApp />
                    </React.Suspense>} />
                    <Route path='/Rxjs/App' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                        <RxjsApp />
                    </React.Suspense>} />
                    <Route path='/Redux/App' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                        <ReduxApp />
                    </React.Suspense>} />

                    <Route path='auth' element={
                        <React.Suspense fallback={<h2>Loading...</h2>}>
                            <Outlet />
                        </React.Suspense>
                    }>

                        <Route path='home' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                            <AppBar />
                        </React.Suspense>} />
                        <Route path='login' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                            <Login />
                        </React.Suspense>} />
                        <Route path='register' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                            <Register />
                        </React.Suspense>} />
                        <Route path='dashboard' element={<React.Suspense fallback={<h2>Loading...</h2>}>
                            <Dashboard />
                        </React.Suspense>} />

                    </Route>


                </Routes>


            </HashRouter>



        </div>

    );
}

export default Routing;