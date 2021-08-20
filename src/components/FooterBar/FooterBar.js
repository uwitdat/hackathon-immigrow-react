
import './FooterBar.css'
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { MdEventNote } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from "../UserContext/UserContext";



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
            <div className={active === '/forum' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/forum')} to='/forum'>
                    <HiUserGroup className='footer-icon black' />
                    <p className='footer-text black'>GROUPS</p>
                </Link>
            </div>
            <div className={active === '/events' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/events')} to='/events'>
                    <MdEventNote className='footer-icon black' />
                    <p className='footer-text black' >EVENTS</p>
                </Link>
            </div>
            <div className={active === '/mentors' ? 'flex-col active' : 'flex-col'}>
                <Link onClick={() => handleColor('/mentors')} to='/mentors'>
                    <IoPerson className='footer-icon black' />
                </Link>
                <p className='footer-text'>MENTORS</p>
            </div>
        </div>
    )
}

export default FooterBar
