import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => (
    <header className='header'>
        <Link to='/'>
            Shopp!
        </Link>
    </header>
)

export default Header;
