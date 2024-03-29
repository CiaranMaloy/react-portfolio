import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
    <div className="App">
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>
                &ls;body&gt;
            </span>

            <Outlet />

            <span className='tags bottom-tags'>
                &ls;/body&gt;
                <br />
                <span className='bottom-tag-html'>
                    &ls;/body&gt;
                </span>
            </span>

        </div>
    </div>
    )
}

export default Layout