
import './FooterBar.css'
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdEventNote } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from "../UserContext/UserContext";
import UserLogout from "../UserLogout/UserLogout";



const FooterBar = () => {
    const { active, handleColor } = useContext(UserContext);



    return (
        <div className='footerbar'>
            <div className={active === '/homepage' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/homepage')} to='/homepage'>
                    <AiFillHome className='footer-icon black' />
                </Link>
                <p className='footer-text black'>HOME</p>
            </div>
            <div className={active === '/groups' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/groups')} to='/groups'>
                    <HiUserGroup className='footer-icon black' />
                </Link>
                <p className='footer-text black'>GROUPS</p>
            </div>
            <div className={active === '/events' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/events')} to='/events'>
                    <MdEventNote className='footer-icon black' />
                </Link>
                <p className='footer-text black' >EVENTS</p>

            </div>
            <div className={active === '/mentors' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/mentors')} to='/mentors'>
                    <IoPerson className='footer-icon black' />
                </Link>
                <p className='footer-text'>MENTORS</p>
            </div>
            <div className={active === '/' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/')} to='/'>
                    <IoIosLogOut className='footer-icon black' />
                </Link>
                <p className='footer-text'>LOGOUT</p>
            </div>
        </div>
    )
}

export default FooterBar
