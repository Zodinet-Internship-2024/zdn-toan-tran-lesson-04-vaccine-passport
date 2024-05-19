import './header.scss';
import logo from '../../assets/logoCucYT.png';
import heart from '../../assets/heart.png';
import VNFlag from '../../assets/VN.png';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
const Header = () => {
    return (
        <header className="header">
           <Logo />
            <nav>
                <Link className="link" to="/">
                    Trang chủ
                </Link>
                <Link className="link" to="/">
                    Giới thiệu
                </Link>
                <select className="">
                    <option value="VN">
                        <img src={VNFlag} alt="Co Viet Nam" />
                        <span>VN</span>
                    </option>
                </select>
            </nav>
        </header>
    );
};
export default Header;
