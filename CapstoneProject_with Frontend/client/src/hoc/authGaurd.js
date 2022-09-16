// import React,{ useState, useEffect, useRef} from 'react';
// import { useSelector } from 'react-redux';
// import {useNavigate} from 'react-router-dom';

// export default function authguard(ComposedComponent,roleCheck=false){
//         const AuthenticationCheck = (props) => {
//         const [isAuth, setIsAuth ] = useState(false);
//         const users = useSelector( state => state.users )
//         const navigation = useRef(useNavigate());

//         useEffect(()=>{
//             if(!users.auth){
//                 navigation.navigate('/')
//             } else {
               
//                     setIsAuth(true)
                
//             }
//         },[])


//         if(!isAuth){
//             return(
//                 <div className="main_loader">
//                     loading
//                 </div>
//             )
//         } else{
//             return(
//                 <ComposedComponent {...props}/>
//             )
//         }
//     }
//     return AuthenticationCheck;
// }
