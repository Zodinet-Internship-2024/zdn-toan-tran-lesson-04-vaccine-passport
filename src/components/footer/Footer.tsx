import './footer.scss';
import copyright from '../../assets/copyright.svg';
import facebook from '../../assets/facebook.png';
import certification from '../../assets/certification.png';
import Logo from '../common/Logo';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="info-container">
                <section>
                    <Logo />
                    <div className="copyright">
                        <img src={copyright} alt="logo copyright" />
                        <p>
                            Bản quyền thuộc TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA
                        </p>
                    </div>
                    <p className="develop">
                        Phát triển bởi: <span>Galaxy Digital</span>
                    </p>
                </section>
                <section className="address">
                    <span>Theo dõi chúng tôi:</span>
                    <img src={facebook} alt="logo facebook" />
                </section>
            </div>
            <div className="cert-container">
                <Link to="https://www.vietnamkhoemanh.vn">www.vietnamkhoemanh.vn</Link>
                <img src={certification} alt="certification" />
            </div>
        </footer>
    );
};
export default Footer;
