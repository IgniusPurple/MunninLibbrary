import { Link } from 'react-router-dom';
import logo from '../../assets/munnin.png';
import profilePicture from '../../assets/lais.png';
import { HeaderStyles, ProfileWrapper } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderStyles className="header d-flex justify-content-between header-background">
            <Link to="/" className="Munnin logo">
                <img src={logo} alt="Muninn" className='logo' />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/login">Explorar</Link></li>
                    <li><Link to="/register">Eventos</Link></li>
                    <li><Link to="/about">Comunidade</Link></li>
                </ul>
            </nav>
            <input type="text" name="" id="" placeholder='Pesquisar títulos, gênero, autores'/>

            <ProfileWrapper>
                <img src={profilePicture} alt="" className="rounded-circle border border-1"/>
                <button>Lais</button>
            </ProfileWrapper>
        </HeaderStyles>
    )
}

export default Header;