import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
         <div className='header'>
            <div className="header_container _conteiner">
                <Link to="/" className="header__logo">
                    Roidoha
                </Link>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                    <li className="menu__item">
                            <Link to="/" className="menu__link">Головна</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/catalog" className="menu__link">Каталог</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="" className="menu__link">Пошук</Link>
                        </li>
                    </ul>
                </nav>
                <div className='RegLog'>
                    
                <Link to="/login" className="RegLog">Увійти</Link>
                <Link to="/reg" className="RegLog">Реєстрація</Link>

                </div>
            </div>
        </div>
    )
}
export default Header;