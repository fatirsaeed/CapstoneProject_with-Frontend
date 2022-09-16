import React,{useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';
import SideDrawer from './sideNavigation';

import {useSelector,useDispatch} from 'react-redux'
import { clearNotification } from "../../store/actions/index";
import {signOut} from '../../store/actions/users_actions'
import {showToast} from '../../utils/tools'

const Header = (props) =>{
    const notifications = useSelector(state=>state.notifications)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const signOutUser = () => {
        //dispatch()
        dispatch(signOut())
        navigate('./')
    }

    

    useEffect(()=>{
        if(notifications && notifications.error){
            const msg = notifications.msg ? notifications.msg:"error";
            showToast('ERROR',msg)
            dispatch(clearNotification())
        }
        if(notifications && notifications.success){
            const msg = notifications.msg ? notifications.msg:"error";
            showToast('SUCCESS',msg)
            dispatch(clearNotification())
        }
    },[notifications,dispatch]
    )
    return(
        <>
        <nav className="navbar fixed-top">
            <Link style={{fontFamily:'Fredoka One'}} to="/"
            className="navbar-brand d-flex align-items-center"
            >
                .Articles
            </Link>
            <SideDrawer signOutUser={signOutUser} />
        </nav>
        </>
    )
}

export default Header;