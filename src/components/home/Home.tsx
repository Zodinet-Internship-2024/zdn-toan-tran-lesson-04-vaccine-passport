import './home.scss';
import VaccineSearchPanel from './VaccineSearchPanel';
import banner from '../../assets/home-banner.png';
const Home = () => {
    return (
        <main className="home">
            <VaccineSearchPanel />
            <div className="home__banner">
                <img src={banner} alt="banner for vaccine home page" />
            </div>
        </main>
    );
};
export default Home;
