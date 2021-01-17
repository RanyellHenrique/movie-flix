import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout, isAuthenticated as auth } from '../../utils/auth';

import './styles.scss';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsAuthenticated(auth());
    }, [location])

    const onLogout = () => {
        logout();
    }

    return (
        <nav className="navbar-container">
            <Link  to="/movies" className="navbar-title">
                MovieFlix
            </Link>
            {isAuthenticated &&
                <button
                    className="btn navbar-button"
                    onClick={onLogout}
                >
                    <h6 className="navbar-text-button">Sair</h6>
                </button>
            }
        </nav>
    );
}


export default Navbar;