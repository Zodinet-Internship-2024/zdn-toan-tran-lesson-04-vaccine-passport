import './header.scss';
import logo from '../../assets/logoCucYT.png';
import heart from '../../assets/heart.png';
import VNFlag from '../../assets/VN.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <section className="logo">
                <div className="logo__container">
                    <img src={logo} alt="logo cuc y te" />
                    <span>CỤC CNTT BỘ Y TẾ</span>
                </div>
                <div className="logo__container">
                    <img src={heart} alt="Viet Nam khoe manh" />
                    <span>VIỆT NAM KHỎE MẠNH</span>
                </div>
            </section>
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
