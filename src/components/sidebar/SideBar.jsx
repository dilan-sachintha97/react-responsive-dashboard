import './SideBar.css'
import Logo from '../../imgs/logo.png'

import { sideBarData } from '../../data/Data'

const SideBar = () => {
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
                <div key={index} className="menuItem">
                    <div><data.icon/></div>
                    <span>{data.heading}</span>
                </div>
            )}
            
        </div>
    </div>
  )
}

export default SideBar
