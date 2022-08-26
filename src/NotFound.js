import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>404 Error</h2>
            <p>This page has vanished into the ether, please accept our appologies</p>
            <Link to='/'>Take me back to the familiar</Link>
        </div>
    );
}

export default NotFound;