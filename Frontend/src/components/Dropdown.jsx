import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({submenus,dropdown}) => {
  return (
    <ul className={` ${dropdown?"show":"dropdown"}  dropdow_menu absolute servis_list z-10`}>
        {
            submenus.map((submenu,index)=>(
                <li key={index} className=''>
                 <Link to={submenu.url}>{submenu.title}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default Dropdown