import './styles.scss';
import { ReactComponent as Image } from '../../core/assets/images/image.svg';
import { ReactComponent as Arrow } from '../../core/assets/images/arrow.svg';

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
                    <form className="home-login-content">
                        <h1 className="home-login-title">LOGIN</h1>
                        <input
                            type="text"
                            className="home-input form-control mb-4"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            className="home-input form-control home-input-password"
                            placeholder="Senha"
                        />
                        <div className="d-flex">
                            <button className="btn-home btn btn-warning">
                                <h5>LOGAR</h5>
                            </button>
                            <div className="btn-home-content">
                                <Arrow />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;