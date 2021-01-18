import './styles.scss';
import { ReactComponent as Image } from '../../core/assets/images/image.svg';
import LoginCard from './LoginCard';

const Home = () => {


    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-content-titles">
                    <h1 className="home-title">
                        Avalie Filmes
                    </h1>
                    <h3 className="home-subtitle">
                        Faça parte do nosso catálogo de divulgação e <br /> aumente a venda dos seus produtos.
                    </h3>
                    <div className="home-image">
                        <Image />
                    </div>
                </div>
                <div className="home-login-container">
                    <LoginCard />
                </div>
            </div>
        </div>
    );
}

export default Home;