import './logo.scss';
import logo from '../../assets/logoCucYT.png';
import heart from '../../assets/heart.png';
const Logo = () => {
    return (
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
    );
};
export default Logo;
