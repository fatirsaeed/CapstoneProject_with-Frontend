import { toast } from 'react-toastify';
import cookie from 'react-cookies';


export const showToast = (type,msg) => {
    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        default:
            return false
    }
}

export const getTokenCookie = () => cookie.load('x-auth-token');
export const removeTokenCookie = () => cookie.remove('x-auth-token');
export const getAuthHeader = { headers: {'x-auth-token':getTokenCookie()}}