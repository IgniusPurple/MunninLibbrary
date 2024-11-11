import { Link } from 'react-router-dom';
import logo from '../../assets/munnin.png';
import profilePicture from '../../assets/lais.png';
import { HeaderStyles } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderStyles className="header d-flex justify-content-between header-background">
            <Link to="/" className="Munnin logo">
                <img src={logo} alt="Muninn" />
            </Link>
            <nav className="nav">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <input type="text" name="" id="" placeholder='Pesquisar títulos, gênero, autores'/>

            <div className='d-flex'>
                <img src={profilePicture} alt="" className="rounded-circle border border-1"/>
                <button>Lais</button>
            </div>
        </HeaderStyles>
    )
}

export default Header;