import './SideBar.css'
import Logo from '../../imgs/logo.png'

import { sideBarData } from '../../data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { useState } from 'react'

const SideBar = () => {

const [selected ,setSelected] = useState(0)

  return (
    <div className="sideBar">
        
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>My<span>s</span>hop</span>
        </div>

        {/* menu */}
        <div className="menu">
            
            {sideBarData?.map((data,index)=>
                <div onClick={()=>{setSelected((pre)=>index)}} key={index} className={ (selected===index)?"menuItem active":"menuItem"}>
                    <div><data.icon/></div>
                    <span>{data.heading}</span>
                </div>
            )}
            <div className="menuItem">
                <div><UilSignOutAlt/></div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
