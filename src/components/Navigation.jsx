import {Link, useLocation} from 'react-router-dom';

function Navigation() {
    const currentPath = useLocation().pathname;

    return (
        <ul className='navbar'>
            <Link 
            to="/portfolio"
            className={currentPath === '/portfolio' ? 'active' : ''}
            >
                Portfolio
            </Link>
            <Link
            to="/author"
            className={currentPath === '/author' ? 'active' : ''}
            >
                Author
            </Link>
            <Link
            to="/contact"
            className={currentPath === '/contact' ? 'active' : ''}
            >
                Contact
            </Link>
            <Link
            to="/resume"
            className={currentPath === '/resume' ? 'active' : ''}
            >
                Resume
            </Link>
        </ul>
    );
}

export default Navigation;