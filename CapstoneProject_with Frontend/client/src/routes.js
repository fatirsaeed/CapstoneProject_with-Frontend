import React,{useEffect,useState} from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';  
import GoogleFontLoader from 'react-google-font-loader';

import Loader from './utils/loader';
import {useDispatch,useSelector} from 'react-redux';
import {isAuthUser} from './store/actions/users_actions';

import MainLayout from './hoc/mainLayout';
import Home from './components/home';
import Header from './components/navigation/header';
import Auth from './components/auth';
import Dashboard from './components/dashboard/index'
import Profile  from './components/dashboard/profile';
import Articles from './components/dashboard/articles';
//import authguard from './hoc/authGaurd';


const Routers = () => {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector(state=> state.users);


  useEffect(()=>{
    dispatch(isAuthUser())
  },[dispatch]);

  useEffect(()=>{
    if(users.auth !== null){
      setLoading(false)
    }
  },[users]);

  return(
    <BrowserRouter>
      <Header/>
      
      { loading ?
         <Loader/>
      :

      <MainLayout>
        <Routes>
        <Route path="/dashboard/articles" element={<Articles/>}></Route>
          <Route path="/dashboard/profile" element={<Profile/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          
        </Routes> 
      </MainLayout>
      }
      <GoogleFontLoader
        fonts={[
          { font:'Roboto', weights: [300,400,900]},
          { font: 'Fredoka One'}
        ]}
      />
    </BrowserRouter>
  )
}

export default Routers;
