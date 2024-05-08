import { Button } from 'flowbite-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../redux/features/auth/authSlice';

const Header = () => {
    const{currentUser}=useSelector(state=>state.auth);
    const dispatch=useDispatch();

    const signOutButton=()=>{
         dispatch(signOut())
    }
  return (
    <div className='bg-[#d8dbdf]  h-[60px]'>
        <div className='flex justify-between h-full pl-20 pr-20 items-center ' >
        <Link to={"/"}>
            <img src="../images/man-truck.png" alt="" className='h-20 object-cover' />
        </Link>
        <nav className='flex items-center gap-2 text-sm font-serif'>
            {
                currentUser?<span>{currentUser.username}</span>:"Sign In"
            }
           
            <Button className='cursor-pointer bg-blue-500' onClick={signOutButton}>Sign out</Button>
        </nav>
        </div>
    </div>
  )
}

export default Header