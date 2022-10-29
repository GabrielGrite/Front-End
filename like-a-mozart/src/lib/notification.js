import { toast } from 'react-toastify';

export const notifySuccess = message => 
  toast(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'foo-bar'
  })
