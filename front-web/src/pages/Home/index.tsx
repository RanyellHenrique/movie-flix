import './styles.scss';
import { ReactComponent as Image } from '../../core/assets/images/image.svg';
import { ReactComponent as Arrow } from '../../core/assets/images/arrow.svg';
import { useForm } from 'react-hook-form';
import { makeLogin } from '../../core/utils/requests';
import { useState } from 'react';
import { saveSessionData } from '../../core/utils/auth';
import { useHistory } from 'react-router-dom';

type FormState = {
    username: string;
    password: string;
}

const Home = () => {

    const { register, handleSubmit, errors } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormState) => {
        setIsLoading(true);
        makeLogin(data)
            .then(res => {
                saveSessionData(res.data);
                history.push('/movies');
            })
            .catch(() => setHasError(true))
            .finally(() => setIsLoading(false));
    }

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
                    <form className="home-login-content" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="home-login-title">LOGIN</h1>
                        {hasError && (
                            <div className="alert alert-danger" role="alert">
                                Usuário ou senha inválidos!
                            </div>
                        )}
                        <div className="mb-5">
                            <input
                                type="text"
                                className="home-input form-control"
                                placeholder="Email"
                                name="username"
                                ref={register({
                                    required: "Campo obrigatório",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido"
                                    }
                                })}
                            />
                            {errors.username && <div className=" d-block invalid-input ">{errors.username.message}</div>}
                        </div>
                        <div className="home-input-password">
                            <input
                                type="password"
                                className="home-input form-control"
                                placeholder="Senha"
                                name="password"
                                ref={register({ required: true })}
                            />
                            {errors.password && <div className="invalid-input d-block" >Campo obrigatório</div>}
                        </div>
                        <div className="d-flex">
                            <button className="btn-home btn btn-warning">
                                <h5 className="btn-home-text">LOGAR</h5>
                                {isLoading && (
                                    <div className="spinner-border btn-home-spinner" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                )}
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